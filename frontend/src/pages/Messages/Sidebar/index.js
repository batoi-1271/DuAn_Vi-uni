import { useEffect, useState, useRef } from 'react'
import { useRouteMatch } from 'react-router-dom'
import shave from 'shave'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

function Sidebar({ headers, user, conversations, setConversations }) {
  const [contentSearch, setContentSearch] = useState('')
  const inputSearchRef = useRef()

  let { path, url } = useRouteMatch()

  const pathName = window.location.pathname.split(`${path}/`).join('')

  console.log(pathName)

  const dataSearch = conversations

  conversations = dataSearch.filter((user) => {
    const convertString = (str) => {
      return str
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
    }
    return convertString(user.name).includes(convertString(contentSearch))
  })
  const searchHandle = (e) => {
    setContentSearch(e.target.value)
  }

  useEffect(() => {
    shave(`.${cx('text')}`, 30, { character: '...' })
  })

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <h1 className={cx('title')}>Chat</h1>
        <div className={cx('toolbar')}>
          {/* <button>
            <i className="fa-solid fa-ellipsis"></i>
          </button>
          <button>
            <i className="fa-solid fa-video-plus"></i>
          </button> */}
          <Link to={`${path}/new`} className={cx('user')}>
            <button>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          </Link>
        </div>
      </div>
      <div className={cx('search')}>
        <input
          ref={inputSearchRef}
          value={contentSearch}
          type="search"
          onChange={(e) => searchHandle(e)}
          className={cx('input-search')}
          placeholder="Tìm kiếm trên Message"
        />
        <span className={cx('icon-search')}>
          <i className="fa-regular fa-magnifying-glass" />
        </span>
      </div>
      <div className={cx('list-user')}>
        {conversations.map((conversation, index) => (
          <Link
            to={`${path}/${conversation.link}`}
            className={cx('user', { active: pathName === conversation.link })}
            key={index}
          >
            <div className={cx('avatar')}>
              <img src={conversation.photo} alt={conversation.name} />
              {/* <span className={cx('fa-solid', 'fa-circle', 'online')} /> */}
            </div>
            <div className={cx('info')}>
              <span className={cx('name')}>{conversation.name}</span>
              <span className={cx('text')}>{conversation.text}</span>
            </div>
            <button>
              <i className="fa-solid fa-ellipsis"></i>
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
