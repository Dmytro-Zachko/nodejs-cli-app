// const sb = require('./contacts')
// // console.log(sb)
// const { vyna } = require('./contacts')
// console.log(vyna)
const contacts = require('./contacts')
const argv = require('yargs').argv

const  invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
      case 'list':
          const list = await contacts.listContacts();
          console.table(list)
          break;
    case 'get':
          const contactById = await contacts.getContactById(id);
          if (!contactById) {
              throw new Error(`Contact with id ${id} not found`);
          }
          console.table(contactById)
      break;

    case 'add':
    const newContact = await contacts.addContact({ name, email, phone });
			console.table(newContact);
      break;

    case 'remove':
      const deleteContacts = await contacts.removeContact(id)
      console.table(deleteContacts)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv)