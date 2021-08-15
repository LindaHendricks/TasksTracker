import PropTypes from 'prop-types';
// import styled from "styled-components";
import Button from './Button';




const Header = ({title}) => {

 const onClick = () => {
        console.log("lol")
    }

    return (
        <div>
            <header className="header">
                {/* <h1 style={style}>{title}</h1> */}
                {/* <H1>Hello</H1> */}
                <h1 style={{ color: "blue"}}>{title}</h1>
                <Button color='green' text='Add' onClick={onClick}/>
            </header>
        </div>
    )
}


Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const style = {
//     color: "bue"
// }

// const H1 = styled.h1 `
// color: blue;
// `

export default Header
