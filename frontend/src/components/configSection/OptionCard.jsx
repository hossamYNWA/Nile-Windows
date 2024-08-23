import { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import { useDispatch } from 'react-redux'
import { winSelectActions } from '../store/WinConfigOptions'
import { addWinConfig } from '../store/WinConfigs'
import { useCallback, memo } from 'react'
const OptionCard = memo(({ option, index }) => {
  // const [selected,setSelect] = useState(false)
  const dispatch = useDispatch()
  const selectHandler = useCallback(() => {
    console.log('selected:  ' + JSON.stringify(option))
    const filterPayload = { selectedId:option._id, index }
    const payload = { option: option.name, index: index, id: option._id }
    dispatch(winSelectActions.selectOption(payload))
    dispatch(addWinConfig.addConfig(payload))
    dispatch(winSelectActions.filterOptions(filterPayload))
  }, [option, index])
  // declaring option name
  let optName = option.name
  if (!optName && option.type) {
    if (option.type.length === 1) {
      optName = option.type[0]
    } else {
      optName = option.type
    }
  } else if (option.title) {
    optName = option.title
  } else if (option.brandname) {
    optName = option.brandname
  }
  return (
    <Card
      sx={{
        border: `${option.selected ? '2px solid var(--light-blue)' : 'none'}`,
        position: 'relative',
        maxWidth: 145,
        Height: 250,
        margin: '15px 25px'
      }}
      onClick={selectHandler}
    >
      {option.selected && (
        <CheckBoxIcon
          sx={{
            color: '#0074df',
            right: -6,
            position: 'absolute',
            zIndex: 9,
            fontSize: '2.6rem',
            top: -6
          }}
        />
      )}
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={option.image}
          alt={optName}
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div' align='center'>
            {optName}
          </Typography>
          {/* <Typography variant="body1" color="text.secondary">
                       from {option.from}
                    </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  )
})

export default OptionCard
