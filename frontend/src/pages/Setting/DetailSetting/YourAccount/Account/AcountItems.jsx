import React from 'react';
import Header from '../../../Header/Header';
import { Link, useLocation, useHistory } from "react-router-dom";


import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Items from './Items';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Profile from '../../../../Profile/Profile';

import TextField from '@mui/material/TextField';

const AcountItems = () => {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className='AcountItems'>
            <Header title="Account information" />
            <div className='AcountItems_content'>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography>
                            <Items title="User name" content="@username" />
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <form action="">
                                <div className="User">
                                    <input className='inputUser' type="text" placeholder='Username' value="@username" />
                                </div>
                                <div id="btnUpdate">
                                    <input type="button" className='btnUpdate' value="Save"></input>
                                </div>
                            </form>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography>
                            <Items title="Phone" content="+840977XXXXXX" />
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <form action="">
                                <div className="User">
                                    <input className='inputUser' type="text" placeholder='Phone' value="+840977XXXXXX" />
                                </div>
                                <div id="btnUpdate">
                                    <input type="button" className='btnUpdate' value="Update phone number"></input>
                                </div>
                                <div id="btnDelete">
                                    <input type="button" className='btnDelete' value="Delete phone number"></input>
                                </div>
                            </form>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                {/* START Account creation */}

                <Accordion>
                    <AccordionSummary
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography>
                            <Items title="Account creation" content="Apr 1, 2020, 12:16:15 PM" content1="1.52.174.147 (Vietnam)" />
                        </Typography>
                    </AccordionSummary>
                </Accordion>
                {/* END Account creation */}

                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography>
                            <Items title="Country" content="VietNam" />
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <form action="">
                                <div className="country">
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth className='formCountry'>
                                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                                Country
                                            </InputLabel>
                                            <NativeSelect
                                                defaultValue={84}
                                                inputProps={{
                                                    name: 'Country',
                                                    id: 'uncontrolled-native',
                                                }}
                                            >
                                                <option value={10}>Korea</option>
                                                <option value={20}>Japan</option>
                                                <option value={84}>VietNam</option>
                                            </NativeSelect>
                                        </FormControl>
                                    </Box>
                                    <p>This is the primary country associated with your account.
                                        Your country helps us to customize your Vi-uni experience. <a href="#">Learn more</a></p>
                                </div>
                                <div id="btnUpdate">
                                    <input type="button" className='btnUpdate' value="Update your country"></input>
                                </div>
                            </form>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header"
                    >
                        <Typography>
                            <Items title="Gender" content="Male" />
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <form action="">
                                <div className="Gender">
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl>
                                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="female"
                                                name="radio-buttons-group"
                                            >
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Box>
                                    <p>If you haven’t already specified a gender, this is the one associated with your account based on your profile and activity.
                                        This information won’t be displayed publicly.</p>
                                </div>
                                <div id="btnUpdate">
                                    <input type="button" className='btnUpdate' value="Save"></input>
                                </div>
                            </form>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                {/* START Account creation */}
                <Accordion>
                    <AccordionSummary
                        aria-controls="panel6bh-content"
                        id="panel6bh-header"
                    >
                        <Typography>
                            <Items title="Birthday" content="Oct 14, 1999"
                                content1="Add your date of birth to your "
                                span="profile." href="/profile"
                            />
                            {/* <Link to="/profile">profile</Link> */}
                        </Typography>
                    </AccordionSummary>
                </Accordion>
                {/* END Account creation */}

                {/* AGE Account creation */}
                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel7bh-content"
                        id="panel7bh-header"
                    >
                        <Typography>
                            <Items title="Age" content="22" />
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p id='ageHead'>These are the age ranges associated with you.</p>
                        <Typography>
                            <form action="">
                                <div className="age">
                                    <form action="">
                                        <input className='inputUser' type="text" placeholder='Age' value="22" readOnly/>
                                    </form>
                                    <p>Not right? You can add your date of birth to your profile without sharing it publicly.</p>
                                </div>
                            </form>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                {/* AGE Account creation */}
            </div>
        </div>
    )
}

export default AcountItems;