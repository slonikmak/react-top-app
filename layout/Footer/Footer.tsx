import { FooterProps } from './Footer.props';
import {ReactElement} from "react";

export const Footer = ({ ...props }: FooterProps): ReactElement => {
    return (
        <div {...props}>
            Footer
        </div>
    );
};