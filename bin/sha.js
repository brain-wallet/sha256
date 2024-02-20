#!/usr/bin/env node

// import { sha256 } from '../js/sha256.js'

// Import the crypto module
import { calculateSHA256Hex } from '../js/sha256.js'

const passphrase = process.argv[2] || 'aa'

const hex = await calculateSHA256Hex(passphrase)

console.log(hex)
