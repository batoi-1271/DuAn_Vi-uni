import { useEffect, useState, useCallback, useRef } from 'react'
import Message from '../../../components/Message'
import classNames from 'classnames/bind'
import moment from 'moment'
import 'moment/locale/vi'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client'
import Tippy from '@tippyjs/react/headless'
import Peer from 'peerjs'
import styles from './Group.module.scss'
import link from '../link'

moment.locale('vi')

const cx = classNames.bind(styles)
const socket = io(link, {
  auth: {
    token: localStorage.getItem('accessToken')
  }
})

function Group({ headers, user, conversations, setConversations }) {
  const [messages, setMessages] = useState([])
  const [content, setContent] = useState('')
  const [typing, setTyping] = useState({ typing: false })
  const [inputRename, setInputRename] = useState('')
  const [clickRename, setClickRename] = useState(false)
  const inputRef = useRef()
  const messageEndRef = useRef()
  const room = useParams()

  const infoConversation = conversations.find(
    (conversation) => conversation.link === `group/${room.id}`
  )

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const getMessages = useCallback(() => {
    axios
      .get(`${link}/group-message/${room.id}`, headers)
      .then((response) => {
        const tempMessages = response.data.map((result) => {
          return {
            id: result.id,
            author: result.member_id,
            message: result.content,
            timestamp: result.created_date
          }
        })
        setMessages([...tempMessages])
      })
  }, [room.id, headers])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    getMessages()

    socket.emit('join room', room['*'])

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
          if (conversation.link === `group/${room.id}`)
            return { ...conversation, text: data.message }
          else return { ...conversation }
        })
      )
    })

    return () => {
      socket.off('connect')
      socket.off('join room')
      socket.off('new message')
      socket.emit('leave room', room['*'])
      socket.off('leave room')
    }
  }, [getMessages, setConversations, room, user.id])

  useEffect(() => {
    if (content.length) socket.emit('typing', { typing: true })
    else socket.emit('typing', { typing: false })

    socket.on('typing', (data) => {
      console.log('data: ', data)
      setTyping(data)
    })

    return () => {
      socket.off('typing')
    }
  }, [content])

  const infoHandle = () => {
    console.log('ok')
  }

  const renameHandle = (e) => {
    e.preventDefault()
    axios
      .post(
        `${link}/group-message/rename`,
        {
          id: room.id,
          name: inputRename
        },
        headers
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
    window.location.href = `/messages/group/${room.id}`
  }

  const leaveGroup = () => {
    axios
      .post(
        `${link}/group-message/leave`,
        {
          id: room.id
        },
        headers
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
    window.location.href = `/messages/`
  }

  const sendMessage = (e) => {
    e.preventDefault()
    if (content === '') return
    const msg = {
      id: room.userId,
      author: user.id,
      message: content,
      timestamp: new Date()
    }
    setMessages((prev) => [...prev, msg])
    setConversations(
      conversations.map((conversation) => {
        if (conversation.link === `group/${room.id}`)
          return { ...conversation, text: `Bạn: ${content}` }
        else return { ...conversation }
      })
    )
    socket.emit('new message', msg.message)

    axios
      .post(
        `${link}/group-message/${room.id}`,
        {
          content
        },
        headers
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error))

    setContent('')
    inputRef.current.focus()
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

  const [peerId, setPeerId] = useState(null)
  const [remotePeerIdValue, setRemotePeerIdValue] = useState('')
  const remoteVideoRef = useRef(null)
  const currentUserVideoRef = useRef(null)
  const peerInstance = useRef(null)

  const callVideo = (id) => {
    socket.emit('peer id', id)
  }

  useEffect(() => {
    const peer = new Peer()

    peer.on('open', (id) => {
      setPeerId(id)
    })

    socket.on('peer id', (data) => {
      setRemotePeerIdValue(data)
    })

    peer.on('call', (call) => {
      console.log('answer')
      var getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia

      getUserMedia({ video: true, audio: true }, (mediaStream) => {
        currentUserVideoRef.current.srcObject = mediaStream
        currentUserVideoRef.current.play()
        call.answer(mediaStream)
        call.on('stream', function (remoteStream) {
          remoteVideoRef.current.srcObject = remoteStream
          remoteVideoRef.current.play()
        })
      })
    })

    peerInstance.current = peer
  }, [])

  const call = (remotePeerId) => {
    console.log('click button')
    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia

    getUserMedia({ video: true, audio: true }, (mediaStream) => {
      currentUserVideoRef.current.srcObject = mediaStream
      currentUserVideoRef.current.play()

      const call = peerInstance.current.call(remotePeerId, mediaStream)

      call.on('stream', (remoteStream) => {
        remoteVideoRef.current.srcObject = remoteStream
        remoteVideoRef.current.play()
      })
    })
  }

  return (
    <div className={cx('wrapper')}>
      {infoConversation ? (
        <div className={cx('header')}>
          <div className={cx('user')}>
            <div className={cx('avatar')}>
              <img src={infoConversation.photo} alt="ran" />
              {/* <span className={cx('fa-solid', 'fa-circle', 'online')} /> */}
            </div>
            <div className={cx('info')}>
              <span className={cx('name')}>{infoConversation.name}</span>
              <span className={cx('text')}>
                {typing.typing ? 'Đang nhập...' : ''}
              </span>
            </div>
          </div>
          <div className={cx('toolbar')}>
            {/* <button>
              <i className="fa-solid fa-phone"></i>
            </button> */}
            <Tippy
              trigger="click"
              interactive
              placement="left-start"
              render={(attrs) => (
                <div className={cx('info-toolbar')} tabIndex="-1" {...attrs}>
                  <div
                    className={cx('option')}
                    onClick={() => setClickRename(true)}
                  >
                    Đang thực hiện cuộc gọi. Vui lòng chờ...
                  </div>
                  <div hidden>
                    <video ref={currentUserVideoRef} />
                  </div>
                  <div>
                    <video ref={remoteVideoRef} />
                  </div>
                </div>
              )}
            >
              <button onClick={() => callVideo(peerId)}>
                <i className="fa-solid fa-video"></i>
              </button>
            </Tippy>
            <Tippy
              trigger="click"
              interactive
              render={(attrs) => (
                <div className={cx('info-toolbar')} tabIndex="-1" {...attrs}>
                  {clickRename ? (
                    <form onSubmit={(e) => renameHandle(e)}>
                      <div className={cx('title')}>
                        <i
                          className="fa-regular fa-arrow-left"
                          onClick={() => setClickRename(false)}
                        ></i>
                        <h2>Đổi tên nhóm</h2>
                      </div>
                      <input
                        value={inputRename}
                        onChange={(e) => setInputRename(e.target.value)}
                        type="text"
                        placeholder="Nhập tên cần đổi"
                      />
                    </form>
                  ) : (
                    <>
                      <div
                        className={cx('option')}
                        onClick={() => setClickRename(true)}
                      >
                        Đổi tên nhóm
                      </div>
                      <div
                        className={cx('option')}
                        onClick={() => leaveGroup()}
                      >
                        Rời khỏi nhóm
                      </div>
                    </>
                  )}
                </div>
              )}
            >
              <button onClick={() => infoHandle()}>
                <i className="fa-solid fa-circle-info"></i>
              </button>
            </Tippy>
          </div>
        </div>
      ) : null}
      {remotePeerIdValue ? (
        <Tippy
          visible
          trigger="click"
          interactive
          render={(attrs) => (
            <div className={cx('info-toolbar')} tabIndex="-1" {...attrs}>
              {remoteVideoRef ? (
                <>
                  <h2>Có người đang gọi cho bạn...</h2>
                  <button onClick={() => call(remotePeerIdValue)}>
                    Trả lời
                  </button>
                </>
              ) : (
                ''
              )}
              {console.log(remoteVideoRef)}
              <div hidden>
                <video ref={currentUserVideoRef} />
              </div>
              <div>
                <video ref={remoteVideoRef} />
              </div>
            </div>
          )}
        >
          <div></div>
        </Tippy>
      ) : null}
      <div className={cx('message')}>
        {renderMessages()}
        <div ref={messageEndRef}></div>
      </div>
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
    </div>
  )
}

export default Group
