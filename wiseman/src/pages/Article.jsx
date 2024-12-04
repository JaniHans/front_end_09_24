import { useState , useEffect} from 'react'

function Article() {
  const [contacts, setContacts] = useState([])


  const url = 'https://midaiganes.irw.ee/api/list'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setContacts(json.list || []);
      })
  }, []);

  if (!contacts.length) {
    return <div>Andmete laadimine...</div>;
  }

  const contact = contacts[0];

  const stripHtml = (html) => {
    return html.replace(/<[^>]*>?/g, '');
  }

  return (
    <div className='article'>
    <h1>{contact.title}</h1><br />
    <h2>{stripHtml(contact.intro)}</h2><br />
    <img style={{width: "1000px"}}src={contact.image.small} alt={contact.image.alt} title={contact.image.title}/> <br />
    <div dangerouslySetInnerHTML={{__html: contact.body}} />
    </div>
  )
}

export default Article