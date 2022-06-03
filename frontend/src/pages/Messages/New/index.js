import { useEffect, useState, useCallback, useRef } from 'react'
import Message from '../../../components/Message'
import classNames from 'classnames/bind'
import moment from 'moment'
import 'moment/locale/vi'
import axios from 'axios'
import io from 'socket.io-client'
// import { useNavigate } from 'react-router-dom'
import Tippy from '@tippyjs/react/headless'
import styles from './New.module.scss'
import link from '../link'

moment.locale('vi')

const cx = classNames.bind(styles)
const socket = io('localhost:9999', {
  auth: {
    token: localStorage.getItem('accessToken')
  }
})

function New({ headers, user, conversations, setConversations }) {
  console.log(headers, user)
  const [messages, setMessages] = useState([])
  const [allUser, setAllUser] = useState([])
  const [selectedUser, setSelectedUser] = useState([])
  const [content, setContent] = useState('')
  const [contentSearch, setContentSearch] = useState('')
  const [room, setRoom] = useState({})
  const inputRef = useRef()
  const inputSearchRef = useRef()
  const messageEndRef = useRef()

  // let navigate = useNavigate()

  const getAllUser = useCallback(() => {
    axios.get(`${link}/message/search`, headers).then((response) => {
      let newAllUser = response.data.map((result) => {
        return result
      })
      setAllUser([...newAllUser])
    })
  }, [headers])

  const searchResult = allUser.filter((user) => {
    const convertString = (str) => {
      return str
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
    }
    return (
      convertString(user.first_name).includes(convertString(contentSearch)) ||
      convertString(user.last_name).includes(convertString(contentSearch)) ||
      convertString(`${user.last_name} ${user.first_name}`).includes(
        convertString(contentSearch)
      )
    )
  })

  const searchHandle = (e) => {
    setContentSearch(e.target.value)
  }

  const selectUserHandle = (user) => {
    if (selectedUser.every((item) => item.id !== user.id))
      setSelectedUser([...selectedUser, user])
    setContentSearch('')
    setRoom({ roomId: user.roomId, userId: user.id })
  }

  const unSelectUserHandle = (user) => {
    const unSelectedUser = selectedUser.filter((item) => item.id !== user.id)
    setSelectedUser([...unSelectedUser])
    if (unSelectedUser.length === 1)
      setRoom({
        roomId: unSelectedUser[0].roomId,
        userId: unSelectedUser[0].id
      })
  }

  useEffect(() => {
    getAllUser()
  }, [getAllUser])

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const getMessages = useCallback(() => {
    axios
      .get(`${link}/message/${room.roomId}/${room.userId}`, headers)
      .then((response) => {
        const tempMessages = response.data.map((result) => {
          return {
            id: result.id,
            author: result.user_source_id,
            message: result.content,
            timestamp: result.created_date
          }
        })
        setMessages([...tempMessages])
      })
  }, [room.roomId, room.userId, headers])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    getMessages()

    socket.emit('join room', room.roomId)

    socket.on('new message', (data) => {
      const msg = {
        id: room.userId,
        author: data.author,
        message: data.message,
        timestamp: data.timestamp
      }
      setMessages((prev) => [...prev, msg])
      setConversations((conversations) =>
        conversations.map((conversation) => {
          if (conversation.link === `${room.roomId}/${room.userId}`)
            return { ...conversation, text: data.message }
          else return { ...conversation }
        })
      )
    })

    return () => {
      socket.off('connect')
      socket.off('join room')
      socket.off('new message')
      socket.emit('leave room', room.roomId)
      socket.off('leave room')
    }
  }, [getMessages, setConversations, room, user.id])

  const sendMessage = async (e) => {
    e.preventDefault()
    if (content === '') return

    if (selectedUser.length > 1) {
      const data = selectedUser.map((item) => {
        return {
          id: item.id
        }
      })
      data.unshift({
        id: user.id
      })
      // Tạo nhóm group_message
      // Thêm tất cả thành viên đã chọn vào nhóm member_group_message
      const createGroup = await axios
        .post(
          `${link}/group-message/create`,
          {
            data
          },
          headers
        )
        .then((response) => response.data)
        .catch((error) => console.log(error))
      // Thêm nội dung chat vào group_message
      const groupId = createGroup[0].group_message_id
      axios
        .post(
          `${link}/group-message/${groupId}`,
          {
            content
          },
          headers
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
      setContent('')
      inputRef.current.focus()
      window.location.href = `/messages/group/${groupId}`
    } else {
      const msg = {
        id: room.userId,
        author: user.id,
        message: content,
        timestamp: new Date()
      }
      setMessages((prev) => [...prev, msg])
      setConversations(
        conversations.map((conversation) => {
          if (conversation.link === `${room.roomId}/${room.userId}`)
            return { ...conversation, text: `Bạn: ${content}` }
          else return { ...conversation }
        })
      )
      if (
        conversations.every(
          (item) => item.link !== `${room.roomId}/${room.userId}`
        )
      ) {
        conversations.push({
          photo: selectedUser[0].link_image,
          name: `${selectedUser[0].last_name} ${selectedUser[0].first_name}`,
          text: content,
          link: `${selectedUser[0].roomId}/${selectedUser[0].id}`
        })
        setConversations(conversations)
      }
      socket.emit('new message', msg.message)

      axios
        .post(
          `${link}/message/${room.roomId}/${room.userId}`,
          {
            content,
            user_target_id: room.userId
          },
          headers
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error))

      setContent('')
      inputRef.current.focus()
      window.location.href = `/messages/${room.roomId}/${room.userId}`
      // navigate(`/messages/${room.roomId}/${room.userId}`)
    }
  }

  const renderMessages = () => {
    let i = 0
    let messageCount = messages.length
    let tempMessages = []

    while (i < messageCount) {
      let previous = messages[i - 1]
      let current = messages[i]
      let next = messages[i + 1]
      let isMine = current.author === user.id
      let currentMoment = moment(current.timestamp)
      let prevBySameAuthor = false
      let nextBySameAuthor = false
      let startsSequence = true
      let endsSequence = true
      let showTimestamp = true

      if (previous) {
        let previousMoment = moment(previous.timestamp)
        let previousDuration = moment.duration(
          currentMoment.diff(previousMoment)
        )
        prevBySameAuthor = previous.author === current.author

        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp)
        let nextDuration = moment.duration(nextMoment.diff(currentMoment))
        nextBySameAuthor = next.author === current.author

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false
        }
      }

      tempMessages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      )

      i += 1
    }

    return tempMessages
  }

  return (
    <div className={cx('wrapper')}>
      <Tippy
        visible={searchResult.length > 0}
        interactive
        placement="bottom-start"
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            {searchResult.map((user) => (
              <div
                key={user.id}
                className={cx('user')}
                onClick={() => selectUserHandle(user)}
              >
                <img
                  src={user.link_image}
                  alt={`${user.last_name} ${user.first_name}`}
                  className={cx('avatar')}
                ></img>
                <span className={cx('name')}>
                  {user.last_name} {user.first_name}
                </span>
              </div>
            ))}
          </div>
        )}
      >
        <div className={cx('header')}>
          <span>Đến: </span>
          {selectedUser.map((user) => (
            <div key={user.id} className={cx('selected-user')}>
              <span className={cx('name')}>
                {user.last_name} {user.first_name}
              </span>
              <button onClick={() => unSelectUserHandle(user)}>
                <i className="fa-regular fa-times" />
              </button>
            </div>
          ))}
          <input
            ref={inputSearchRef}
            value={contentSearch}
            type="search"
            onChange={(e) => searchHandle(e)}
            className={cx('user-target')}
          />
        </div>
      </Tippy>
      {selectedUser.length > 0 ? (
        <>
          {selectedUser.length === 1 ? (
            <div className={cx('message')}>
              {renderMessages()}
              <div ref={messageEndRef}></div>
            </div>
          ) : null}
          <form className={cx('footer')}>
            <button onClick={sendMessage}>
              <i className="fa-solid fa-circle-plus"></i>
            </button>
            <div className={cx('input')}>
              <input
                ref={inputRef}
                value={content}
                type="text"
                placeholder="Aa"
                onChange={(e) => {
                  setContent(e.target.value)
                }}
              />
              <button className={cx('icon')}>
                <i className="fa-solid fa-face-smile"></i>
              </button>
            </div>
            <button onClick={sendMessage}>
              <i className="fa-solid fa-paper-plane-top"></i>
            </button>
          </form>
        </>
      ) : null}
    </div>
  )
}

export default New
