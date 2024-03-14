import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import IconButton from "@mui/material/IconButton";
import { Close } from "@mui/icons-material";
import {blue} from "@mui/material/colors";

import './error.scss';
/**
 * Displays the Error Message of the component
 * @constructor
 */

export interface ErrorProps {
    message: string,
}
export default function ErrorMessage({ message } : ErrorProps) {
    // const [alertOpen, setAlertOpen] = React.useState(true);

    return (
        <>
            {/*{alertOpen &&*/}
            <Alert
                variant="filled"
                severity="error"

                sx={{
                    height: "120px", // Set the height of the Alert
                    display: 'flex', // Use flex layout to better control the inner content
                    // flexDirection:
                    alignItems: 'center', // Vertically center the content
                    justifyContent: 'start', // Start aligning content, adjust as needed
                }}
                // onClose={() => {}}
            >
                <AlertTitle
                    sx={{
                        maxHeight: "25px"
                    }}
                >Error</AlertTitle>
                {message}
            </Alert>
            {/*}*/}
        </>
    );
}
