#!/usr/bin/env node

// import { sha256 } from '../js/sha256.js'

// Import the crypto module
import sha256 from '../js/sha256.js'

const passphrase = process.argv[2] || 'aa'

const hex = await sha256(passphrase)

console.log(hex)
