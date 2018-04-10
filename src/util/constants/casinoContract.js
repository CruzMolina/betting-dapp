const address = '0x51cf271deceb13b1711a9b5108917f43ea65fd05'
const ABI = [
  {
    'constant': false,
    'inputs': [],
    'name': 'terminate',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'checkContractBalance',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_number',
        'type': 'uint256'
      }
    ],
    'name': 'bet',
    'outputs': [],
    'payable': true,
    'stateMutability': 'payable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'owner',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [],
    'name': 'estalishOwnership',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'newOwner',
        'type': 'address'
      }
    ],
    'name': 'transferOwnership',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'name': '_minBet',
        'type': 'uint256'
      },
      {
        'name': '_houseEdge',
        'type': 'uint256'
      }
    ],
    'payable': true,
    'stateMutability': 'payable',
    'type': 'constructor'
  },
  {
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'fallback'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': '_status',
        'type': 'bool'
      },
      {
        'indexed': false,
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'Won',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': 'previousOwner',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'newOwner',
        'type': 'address'
      }
    ],
    'name': 'OwnershipTransferred',
    'type': 'event'
  }
]

export {address, ABI}
