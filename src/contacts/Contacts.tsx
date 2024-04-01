import style from './Contacts.module.css'
import {contactNumbers} from '../data/ContactNumbers'

export const Contacts = () => {
    return (
        <div className={style.wrapper}>
          <h3>Наши контакты</h3>
          <div className={style.contact_wrapper}>
          {contactNumbers.map((contact) => (
            <div>
                <ul>
                    <li>
                        <div className={style.name_info}>
                          {contact.organization}
                        </div>
                        <a className={style.contact} href={contact.num_contact}>
                          {contact.contact}
                        </a>
                        <div className={style.address}>
                            {contact.address}
                        </div>
                    </li> 
                </ul>
            </div>
          ))}
          </div>
        </div>
    );
};