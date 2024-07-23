import { ContainerButton } from './style'
import PropTypes from 'prop-types'

export function Button({ children, ...props }) {
    return (
        <ContainerButton {...props}>{children}</ContainerButton>
    )
}
Button.proptype = {
    children: PropTypes.string,
};