import moment from 'moment'
import classNames from 'classnames/bind'
import styles from './Message.module.scss'

const cx = classNames.bind(styles)

function Message(props) {
  const { data, isMine, startsSequence, endsSequence, showTimestamp } = props
  const friendlyTimestamp = moment(data.timestamp).format('LLLL')

  return (
    <div
      className={cx(
        'message',
        { mine: isMine },
        { start: startsSequence },
        { end: endsSequence }
      )}
    >
      {showTimestamp && (
        <div className={cx('timestamp')}>{friendlyTimestamp}</div>
      )}

      <div className={cx('bubble-container')}>
        <div className={cx('bubble')} title={friendlyTimestamp}>
          {data.message}
        </div>
      </div>
    </div>
  )
}

export default Message
