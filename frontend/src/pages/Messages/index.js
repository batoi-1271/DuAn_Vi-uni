import { useCallback, useEffect, useMemo, useState } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import axios from 'axios'
import classNames from 'classnames/bind'
import Sidebar from './Sidebar'
import Content from './Content'
import Group from './Group'
import New from './New'
import styles from './Messages.module.scss'
import link from './link'

const cx = classNames.bind(styles)

function Messages() {
  const headers = useMemo(
    () => ({
      headers: {
        Authorization: `Bearer: ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json'
      }
    }),
    []
  )
  const [user, setUser] = useState({ loading: true })

  let { path } = useRouteMatch()

  useEffect(() => {
    axios.get(`${link}/users/info`, headers).then(
      (response) => {
        setUser(response.data)
      },
      (error) => {
        setUser({ active: false })
        console.error(error.response.data)
      }
    )
  }, [headers])

  const [conversations, setConversations] = useState([])

  const getConversations = useCallback(async () => {
    const listMessage = await axios
      .get(`${link}/message`, headers)
      .then((response) => {
        let newConversations = response.data.map((result) => {
          return {
            photo: result.link_image,
            name: `${result.last_name} ${result.first_name}`,
            text: result.content,
            link: `${result.roomId}/${result.id}`,
            created_date: result.created_date
          }
        })
        return newConversations
      })
    const listGroupMessage = await axios
      .get(`${link}/group-message`, headers)
      .then((response) => {
        let newConversations = response.data.map((result) => {
          return {
            photo: result.link_image,
            name: result.name,
            text: result.content,
            link: `group/${result.id}`,
            created_date: result.created_date
          }
        })
        return newConversations
      })
    let newList = [...listMessage, ...listGroupMessage].sort(
      (a, b) => new Date(b.created_date) - new Date(a.created_date)
    )
    setConversations(newList)
  }, [headers])

  useEffect(() => {
    getConversations()
  }, [getConversations])

  if (user.loading) return <h2>Loading...</h2>

  return (
    <div className={cx('container')}>
      <Sidebar
        headers={headers}
        user={user}
        conversations={conversations}
        setConversations={setConversations}
      />
      <Switch>
        <Route exact path={path}>
          <h2 className={cx('alert')}>
            Vui lòng chọn hoặc tạo một cuộc hội thoại mới!
          </h2>
        </Route>
        <Route path={`${path}/group/:id`}>
          <Group
            headers={headers}
            user={user}
            conversations={conversations}
            setConversations={setConversations}
          />
        </Route>
        <Route path={`${path}/:roomId/:userId`}>
          <Content
            headers={headers}
            user={user}
            conversations={conversations}
            setConversations={setConversations}
          />
        </Route>
        <Route path={`${path}/new`}>
          <New
            headers={headers}
            user={user}
            conversations={conversations}
            setConversations={setConversations}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default Messages
