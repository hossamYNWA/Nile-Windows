import { createSlice } from '@reduxjs/toolkit'
// inital state
const configOptions = [
  {
    title: 'material',
    options: [
      {
        name: 'uPVC',
        image:
          'https://www.windows24.com/cdn-cgi/image/quality=90,format=auto/img/global/attributevalue/ideal-4000.jpg',
        price: '30',
        selected: false
      }
    ]
  },
  {
    title: 'company',
    options: [
      {
        name: 'kompen',
        image:
          'https://www.virtualfairs365.com/wp-content/uploads/2021/05/kompen.jpg',
        price: '30',
        selected: false
      },
      {
        name: 'salamander',
        image:
          'https://a.storyblok.com/f/227108/716x716/e35f1efa8c/brand_swds.jpg/m/2400x0',
        price: '40',
        selected: false
      },
      {
        name: 'nilewindow',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3QgwlGScukqpL_8726CM-9T4OTrqhmT3vCOtDndD0iQ&s',
        price: '20',
        selected: false
      }
    ]
  },
  {
    title: 'openingSystem',
    options: [
      {
        name: 'sliding window',
        image:
          'https://easi-serv.com/wp-content/uploads/2016/07/Dry-Glazing-Original-1-1.jpg',
        price: '45',
        selected: false
      },
      {
        name: 'casement window',
        image:
          'https://5.imimg.com/data5/IO/GR/MY-52834025/upvc-french-casement-window-500x500-500x500.jpg',
        price: '37',
        selected: false
      }
    ]
  },
  {
    title: 'typeOfUnit',
    options: [
      {
        name: 'with renovation',
        image:
          'https://www.grahamwindows.com/wp-content/uploads/fi_GT6700_awn_L.jpg',
        price: '25',
        selected: false
      },
      {
        name: 'without renovation',
        image:
          'https://www.grahamwindows.com/wp-content/uploads/fi_GT6700_awn_L.jpg',
        price: '17',
        selected: false
      }
    ]
  },
  {
    title: 'profile',
    options: [
      {
        name: 'window sash',
        image:
          'https://sashwindows.london/wp-content/uploads/2019/02/Sash-Diagram-272x300.jpg',
        price: '24',
        selected: false
      },
      {
        name: 'door sash',
        image:
          'https://i0.wp.com/realcarriagedoors.com/wp-content/uploads/2018/10/custom-diagram-.png?resize=1200%2C937&ssl=1',
        price: '22',
        selected: false
      }
    ]
  },
  {
    title: 'frame',
    options: [
      {
        name: 'rectangle',
        image:
          'https://blackbadgedoors.com/cdn/shop/files/ExtraV5.1-001-May11.jpg?v=1684407833&width=3000',
        price: '15',
        selected: false
      },
      {
        name: 'arch',
        image:
          'https://www.infinitywindows.com/images/infinity/windows/round-top/styles/RT-Half-Round-Above-Springline.webp',
        price: '20',
        selected: false
      }
    ]
  },
  {
    title: 'sash',
    options: [
      {
        name: 'turn left',
        image:
          'https://eurovistadoors.com/wp-content/uploads/2022/01/Tilt-and-turn-left.png',
        price: '21',
        selected: false
      },
      {
        name: 'turn right',
        image:
          'https://eurovistadoors.com/wp-content/uploads/2022/01/Tilt-and-turn-left.png',
        price: '21',
        selected: false
      },
      {
        name: 'fixed',
        image:
          'https://glassandaluminum.topworksbuilders.ph/wp-content/uploads/2020/02/fixed-windows.jpg',
        price: '19',
        selected: false
      },
      {
        name: 'turn and tilt',
        image:
          'https://eurovistadoors.com/wp-content/uploads/2022/01/Tilt-and-turn-left.png',
        price: '35',
        selected: false
      }
    ]
  },
  {
    title: 'layout',
    options: [
      {
        name: 'white',
        image:
          'https://www.windows24.com/cdn-cgi/image/quality=90,format=auto/img/global/attributevalue/weiss.jpg',
        price: '0',
        selected: false
      },
      {
        name: 'mahogany',
        image:
          'https://www.windows24.com/cdn-cgi/image/quality=90,format=auto/img/global/attributevalue/standarddekor-dekor-mahagoni.jpg',
        price: '0',
        selected: false
      },
      {
        name: 'golden oak',
        image:
          'https://www.windows24.com/cdn-cgi/image/quality=90,format=auto/img/global/attributevalue/standarddekor-golden-oak.jpg',
        price: '0',
        selected: false
      },
      {
        name: 'welnut',
        image:
          'https://www.windows24.com/cdn-cgi/image/quality=90,format=auto/img/global/attributevalue/standarddekor-dekor-nussbaum.jpg',
        price: '0',
        selected: false
      },
      {
        name: 'gray',
        image:
          'https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png',
        price: '0',
        selected: false
      }
    ]
  },
  {
    title: 'fanlight',
    options: [
      {
        name: 'white',
        image:
          'https://www.windows24.com/cdn-cgi/image/quality=90,format=auto/img/global/attributevalue/weiss.jpg',
        price: '0',
        selected: false
      },
      {
        name: 'black',
        image:
          'https://www.windows24.com/cdn-cgi/image/quality=90,format=auto/img/global/attributevalue/weiss.jpg',
        price: '0',
        selected: false
      }
    ]
  },
  {
    title: 'openingLayout',
    options: []
  },
  {
    title: 'profileColor',
    options: []
  },
  {
    title: 'glass',
    options: []
  },
  {
    title: 'glassColor',
    options: []
  }
]
//reducer for selecting option
function selectOption (state, action) {
  const { option, index, id } = action.payload
  const selectedOption = state[index].options.find(opt => opt._id === id)
  selectedOption.selected = true
  state[index].options.forEach((opt, i) => {
    if (opt._id !== id) {
      opt.selected = false
    }
  })
}

// adding new data after fetching from server
function addOptions (state, action) {
  const { title, options } = action.payload
  //   console.log("action title is: " + title)
  const itemToUpdate = state.find(
    item => item.title.toLowerCase() === title.toLowerCase()
  )
  //   console.log('item to update is: ' + itemToUpdate.title)
  if (itemToUpdate) {
    options.data.forEach(opt => {
      opt.selected = false
      opt.show = true
    })
    itemToUpdate.options = options.data
    // console.log("updated item: ", itemToUpdate.title + "/n" + "Options are now:  " + JSON.stringify(itemToUpdate.options));
  }
}

// clearing the existing data
function clearData (state) {
  state.forEach(item => {
    item.options = []
  })
}

// filter the options based on the previous selected option
function filterOptions (state, action) {
  console.log('in filter option')
  const { selectedId, index } = action.payload
  console.log('target INDEX is: ' + index)
  const targetCategory = state[index].title
  console.log('target category is: ' + targetCategory)
  for (let i = index + 1; i < state.length; i++) {
    state[i].options.forEach(opt => {
      if (opt[targetCategory]) {
        console.log('target option is: ' + opt[targetCategory]._id)
        console.log('selected id  is: ' + selectedId)
        if (opt[targetCategory]._id === selectedId) {
          console.log('found a match: ' + opt[targetCategory]._id)
          opt.show = true
        } else {
          opt.show = false
        }
      }
    })
  }
}
const winOptionsSlice = createSlice({
  name: 'winConfigOptions',
  initialState: configOptions,
  reducers: { selectOption, addOptions, clearData, filterOptions }
})

export default winOptionsSlice
const winSelectActions = winOptionsSlice.actions
export { winSelectActions }
