import * as SQLite from 'expo-sqlite'
import FileSystem from 'react-native-filesystem';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Mydb {
    constructor() {
      this.db = SQLite.openDatabase('db.testDb')
        //надо сделать так, чтобы проводилась проверка
        //была ли уже инициализация
        var status = this.readFile('status')
        if(status!=='initok'){
          //сделать инициализацию базы

        }
       
        // this.db.transaction(tx => {
        //     tx.executeSql('SELECT * FROM items', null, // passing sql query and parameters:null
        //         // success callback which sends two things Transaction object and ResultSet Object
        //         (txObj, { rows: { _array } }) => this.setState([..._array]),
        //         // failure callback which sends two things Transaction object and Error
        //         (txObj, error) => console.log('Error ', error)
        //     ) // end executeSQL
        // }) // end transaction

    }
createInit = ()=>{
  const sql
  sql = `CREATE TABLE IF NOT EXISTS records 
  (id_records INTEGER PRIMARY KEY AUTOINCREMENT, data INT,
     day INT, plane INT, status INT, meteo INT, other INT, minuts INT)`
return new Promise((resolve,reject)=>{
  this.db.transaction(tx => {
    tx.executeSql(
      sql,
      null,
      (txobj,rez)=>resolve(),
      (txobj,err)=>reject(err)
    )
  })
})
}
    //тест записи файла
    recordFile = async (key,fileContents) => {
        
        try {
            await AsyncStorage.setItem(key, fileContents)
            console.log('record key = ',key,' val = ', fileContents)
          } catch (e) {
            console.log('error',e)
          }
        
    }
    //тест чтения файла
    readFile = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key)
            if(value !== null) {
              // value previously stored
              return value
            }
          } catch(e) {
            // error reading value
          }
    }
    // setState = (par) => {
    //     this.state = par
    //     this.flagReadOk = true
    //     //console.log('***',par)
    // }
    // //функция обращается к базе и загружает данные в state а после вызывает переданную функцию
    // loadData = (funcAfter) => {
    //     this.db.transaction(tx => {
    //         tx.executeSql('SELECT * FROM items', null, // passing sql query and parameters:null
    //             // success callback which sends two things Transaction object and ResultSet Object
    //             (txObj, { rows: { _array } }) => {
    //                 this.state = [..._array].reverse()
    //                 funcAfter()
    //             },
    //             // failure callback which sends two things Transaction object and Error
    //             (txObj, error) => console.log('Error ', error)
    //         ) // end executeSQL
    //     }) // end transaction
    // }
    // loadDataPromis = () => {
    //     return new Promise((resolve, reject) => {
    //         this.db.transaction(tx => {
    //             tx.executeSql('SELECT * FROM items', null, // passing sql query and parameters:null
    //                 // success callback which sends two things Transaction object and ResultSet Object
    //                 (txObj, { rows: { _array } }) => {
    //                     this.state = [..._array].reverse()
    //                     resolve()
    //                 },
    //                 // failure callback which sends two things Transaction object and Error
    //                 (txObj, error) => console.log('Error ', error)
    //             ) // end executeSQL
    //         }) // end transaction
    //     })

    // }



    // addTest = (par) => {
    //     return new Promise((resolve, reject) => {
    //         this.db.transaction(tx => {
    //             tx.executeSql('INSERT INTO items (text, completed) values (?, ?)', par,
    //                 (txObj, resultSet) => resolve(resultSet),
    //                 (txObj, error) => reject(error))
    //         })
    //     })

    // }

    // editRecordCompleted = (id, par) => {
    //     let newCompl = 0
    //     newCompl = (par === 0) ? 1 : 0
    //     console.log('editrec')
    //     return new Promise((resolve, reject) => {
    //         this.db.transaction(tx => {
    //             tx.executeSql('UPDATE items SET completed = ? WHERE id = ?', [newCompl, id],
    //                 (txObj, resultSet) => {
    //                     if (resultSet.rowsAffected > 0) {
    //                         resolve(resultSet)
    //                     } else {
    //                         reject('err')
    //                     }
    //                 })
    //         })

    //     })

    // }

    // deleteAllRec = () => {
    //     this.db.transaction(tx => {
    //         tx.executeSql('DELETE FROM items', null,
    //             (txObj, resultSet) => console.log('all deleted', resultSet),
    //             (txObj, error) => console.log('error deleted', error))
    //     })
    // }
}

export default Mydb