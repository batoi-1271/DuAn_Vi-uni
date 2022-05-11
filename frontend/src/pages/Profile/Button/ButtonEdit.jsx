import './edit.scss'
import TextField from '@mui/material/TextField';
import * as React from 'react';


const ButtonEdit = ({ show, close, title, children }) => {

    const [textAreaCount, ChangeTextAreaCount] = React.useState(0);

    const recalculate = e => {
        ChangeTextAreaCount(e.target.value.length);
    };

    return (

        <>
            {show ?

                <div className="modalContainer" onClick={() => close()}>
                    <form action="">
                        <div className="modal" onClick={(e) => e.stopPropagation()}>
                            <header className="modal_header">
                                <i class="fa fa-times close" onClick={() => close()}></i>
                                <h2 className="modal_header-title">{title}</h2>
                                <button className="submit">Save</button>
                            </header>
                            <div className="modal_content">
                                <div className="cardContent">
                                    <div className="cardContent_imgCover">
                                        <img src="https://lovablemessages.com/wp-content/uploads/2021/12/bo-hinh-nen-3d-that-dep-va-that-hap-dan-24-1068x601.jpg" alt="" />
                                        <div className="editIcon">

                                            {/* icon EDIT IMG  */}
                                            <label for="file-upload" class="file-upload">
                                                <i class="fas fa-camera"></i>
                                            </label>
                                            <input id="file-upload" type="file" />

                                            {/* icon CANCEL  */}
                                             <label class="file-upload cancel">
                                                <i class="fal fa-times"></i>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="cardContent_imgAvatar">
                                        <img src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_400x400.jpg" alt="" />
                                        <div className="editAvatar">
                                            <label for="file-upload" class="file-upload">
                                            <i class="far fa-camera"></i>
                                            </label>
                                            <input id="file-upload" type="file" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer className="modal_footer">

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
                                    <p>{textAreaCount}/160</p>
                                    <TextField
                                        id="bio"
                                        label="Bio"
                                        multiline
                                        fullWidth
                                        onChange={recalculate}
                                        rows={4}
                                        inputProps={{ maxLength: 160 }}
                                        defaultValue="Ra xã hội làm ăn bươn chải, liều thì ăn nhiều, không liều thì ăn ít. Muốn thành công thì phải chấp nhận trải qua đắng cay ngọt bùi."

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
                                        sx={{ width: 280 }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>

                            </footer>
                        </div>
                    </form>
                </div>

                : null}
        </>
    );
}

export default ButtonEdit;