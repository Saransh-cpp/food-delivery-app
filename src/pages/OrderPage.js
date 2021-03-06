import { AppBar, makeStyles, TextField, Toolbar } from '@material-ui/core';
import Cuisines from '../components/Cuisines'
import { LocationOnOutlined} from '@material-ui/icons'

const useStyles = makeStyles(() => ({

}))

function OrderPage() {

    const classes = useStyles();

    return(
        <div>
        <AppBar position="static">
        <Toolbar>
            <LocationOnOutlined />
            <TextField />
        </Toolbar>

        </AppBar>
        <Cuisines />
        </div>
    );
}

export default OrderPage;