import os from 'node:os'

console.log('info del sistema')
console.log('sistema operativo', os.release())
console.log(os.cpus())
console.log(os.userInfo)
console.log(os.hostname)