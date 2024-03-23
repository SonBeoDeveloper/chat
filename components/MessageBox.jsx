import { format } from "date-fns"

const MessageBox = ({ message, currentUser }) => {
  return message?.sender?._id !== currentUser._id ? (
    <div className="message-box">
      <image src={message?.sender?.profileImage || "/assets/person.jpg"} alt="profile photo" className="message-profilePhoto" />
      <div className="message-info">
        <p className="text-small-bold">
          {message?.sender?.username} &#160; &#183; &#160; {format(new Date(message?.createdAt), "p")}
        </p>

        {message?.text ? (
          <p className="message-text">{message?.text}</p>
        ) : (
          <image src={message?.photo} alt="message" className="message-photo" width={40}
            height={40} />
        )}
      </div>
    </div>
  ) : (
    <div className="message-box justify-end">
      <div className="message-info items-end">
        <p className="text-small-bold">
          {format(new Date(message?.createdAt), "p")}
        </p>

        {message?.text ? (
          <p className="message-text-sender">{message?.text}</p>
        ) : (
          <image src={message?.photo} alt="message" className="message-photo" width={40}
            height={40} />
        )}
      </div>
    </div>
  )
}

export default MessageBox