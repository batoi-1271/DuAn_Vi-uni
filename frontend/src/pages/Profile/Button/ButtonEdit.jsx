import './edit.scss'
import TextField from '@mui/material/TextField';
import * as React from 'react';


const ButtonEdit = ({ show, close, title, children }) => {

    return (

        <>
            {show ?

                <div className="modalContainer" onClick={() => close()}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <header className="modal_header">
                            <i class="fa-solid fa-xmark close" onClick={() => close()}></i>
                            <h2 className="modal_header-title">{title}</h2>
                            <button className="submit">Save</button>
                        </header>
                        <div className="modal_content">
                            <div className="cardContent">
                                <div className="cardContent_imgCover">
                                    <img src="https://lovablemessages.com/wp-content/uploads/2021/12/bo-hinh-nen-3d-that-dep-va-that-hap-dan-24-1068x601.jpg" alt="" />
                                    <div className="editIcon">
                                        <button>
                                            <i class="fa-solid fa-camera"></i>
                                        </button>
                                        <button>
                                            <i class="fa-solid fa-xmark"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="cardContent_imgAvatar">
                                    <img src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_400x400.jpg" alt="" />
                                    <div className="editAvatar">
                                        <button>
                                            <i class="fa-solid fa-camera"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className="modal_footer">
                            <form action="">
                                <div className="name">
                                        <TextField
                                            id="name"
                                            label="Name"
                                            fullWidth
                                            defaultValue="Dương Ngô Tùng"
                                            helperText="Some important text"
                                        />
                                </div>
                                <div className="bio">
                                    <TextField
                                        id="bio"
                                        label="Bio"
                                        multiline
                                        fullWidth
                                        rows={4}
                                        defaultValue="Không có công việc nào không có áp lực, tuy nhiên chỉ có không đam mê công việc mới là áp lớn lực khiến ta từ bỏ công việc đó."

                                    />
                                </div>
                                <div className="location">
                                    <TextField
                                        id="location"
                                        label="Location"
                                        fullWidth
                                        defaultValue=""
                                        helperText=""
                                    />
                                </div>
                                <div className="dateOfBirth">
                                    <h5>Birth date</h5>
                                    <p>This should be your date of birth, whether this account is for your business, event, or even your cat.</p>
                                    <TextField
                                        id="date"
                                        label="Birthday"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        sx={{ width: 220 }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                            </form>
                        </footer>
                    </div>
                </div>

                : null}
        </>
    );
}

export default ButtonEdit;