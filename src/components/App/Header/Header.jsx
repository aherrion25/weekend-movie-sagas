import './Header.css' // css file import
// MUI imports
import Typography from '@mui/material/Typography';

function Header() {
    return (
        <Typography sx={{fontFamily: 'Permanent Marker'}} className="header" variant="h1" gutterBottom>The Movies Saga!</Typography>
    );
};

export default Header;