import * as SQLite from 'expo-sqlite'
import FileSystem from 'react-native-filesystem';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Mydb {
  constructor() {
    const sqlinit = "SELECT name FROM sqlite_master WHERE type='table'"
    this.db = SQLite.openDatabase('testdb8')
    //надо сделать так, чтобы проводилась проверка
    //была ли уже инициализация
    this.readFile('status')
      .then(res => {
        this.status = res
        console.log('status:', this.status)
        if (this.status !== 'initok') {
          //сделать инициализацию базы
          console.log('init')
          this.createInit(`CREATE TABLE IF NOT EXISTS records 
            (id_records INTEGER PRIMARY KEY AUTOINCREMENT, data INT, 
              day INT, plane INT, status INT, 
              meteo INT, other INT, minuts INT,colpol INT)`)
            .then(
              this.createInit(`CREATE TABLE IF NOT EXISTS day (id INTEGER PRIMARY 
                  KEY AUTOINCREMENT, value TEXT)`)
            )
            .then(
              this.createInit(`CREATE TABLE IF NOT EXISTS plane (id INTEGER PRIMARY 
                  KEY AUTOINCREMENT, value TEXT)`)
            )
            .then(
              this.createInit(`CREATE TABLE IF NOT EXISTS status (id INTEGER PRIMARY 
                  KEY AUTOINCREMENT, value TEXT)`)
            )
            .then(
              this.createInit(`CREATE TABLE IF NOT EXISTS meteo (id INTEGER PRIMARY 
                  KEY AUTOINCREMENT, value TEXT)`)
            )
            .then(
              this.createInit(`CREATE TABLE IF NOT EXISTS other (id INTEGER PRIMARY 
                  KEY AUTOINCREMENT, value TEXT)`)
            )
            .then(
              this.createInit(`INSERT INTO day (value) 
                values ('День'), ('Ночь')`)
            )
            .then(
              this.createInit(`INSERT INTO plane (value) 
                values ('Ан-26'), ('А27М')`)
            )
            .then(
              this.createInit(`INSERT INTO status (value) 
                values ('Контрольный'), ('Самостоятельный')`)
            )
            .then(
              this.createInit(`INSERT INTO meteo (value) 
                values ('ПМУ'), ('СМУ')`)
            )
            .then(this.createInit(`SELECT value FROM day`))
            .then(result => console.log('in table day: ', result))
            .then(this.recordFile('status', 'initok'))
            .catch(err => console.log('error: ', err))
        }
      }
      )





  }
  createInit = (sql, par = null) => {
    return new Promise((resolve, reject) => {
      this.db.transaction(tx => {
        tx.executeSql(
          sql,
          par,
          (txobj, rez) => resolve(rez),
          (txobj, err) => reject(err)
        )
      })
    })
  }
  //тест записи файла
  recordFile = async (key, fileContents) => {

    try {
      await AsyncStorage.setItem(key, fileContents)
      console.log('record key = ', key, ' val = ', fileContents)
    } catch (e) {
      console.log('error', e)
    }

  }
  //тест чтения файла
  readFile = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if (value !== null) {
        // value previously stored
        return value
      }
    } catch (e) {
      // error reading value
    }
  }


  addTest = (par) => {
    return new Promise((resolve, reject) => {
      this.db.transaction(tx => {
        tx.executeSql(par, null,
          (txObj, { rows: { _array } }) => resolve([..._array]),
          (txObj, error) => reject(error))
      })
    })

  }

}

export default Mydb