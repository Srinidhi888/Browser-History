import './index.css'

const BrowserTodo = props => {
  const {details, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = details
  const onSub = () => {
    deleteHistory(id)
  }
  
  return (
    <li className='cards'>
      <p className='time'>{timeAccessed}</p>
      <div className='inner-card'>
        <img className='ima' src={logoUrl} alt='domain logo' />
        <p className='title'> {title}</p>
        <p className='para'>{domainUrl}</p>
      </div>
      <button
        className='icon1'
        onClick={onSub}
        type='button'
        data-testid='delete'
      >
        <img
          className='delete-icon'
          src='https://assets.ccbp.in/frontend/react-js/delete-img.png'
          alt='delete'
        />
      </button>
    </li>
  )
}

export default BrowserTodo
