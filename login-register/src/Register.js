import React from 'react'
import { Card, TextField, Typography, Switch, Stack, Button, FormGroup, Grid } from '@mui/material';
import './Register.css'
import GoogleIcon from '@mui/icons-material/Google';

function Register() {

    return (
        <>
            <Card sx={{width:"fit-content" , position:"absolute" , left:"50%" ,top:"50%" ,transform:"translate(-50% , -50%)",padding:"16px 6px " }} >
            <Stack direction="row" spacing={1} alignItems="center"  className="toggler input" sx={{width:"fit-content" , marginLeft:"50%" , transform:"translateX(-50%)"}}>
                    <Typography>ورود</Typography>
                    <Switch defaultChecked onChange={(e) => { console.log(e.target.checked) }} />
                    <Typography>عضویت</Typography>

            </Stack>
            <Button  variant="contained" sx={{ fontSize: '1.2rem'  , marginTop: "1rem" , width:"70%", left:"50%", transform:"translateX(-50%)" , display:"flex" , justifyContent:"space-between"}} sm={{width:"50%"}}  className="cansel_button input"><GoogleIcon  /><Typography sx={{fontSize:"1.2rem"}}>اتصال با جیمیل</Typography></Button>
                <FormGroup className="form" sx={{ width: "30vw" ,minWidth:"300px" , padding:"15px 15px"}}>

                    <TextField
                        id=""
                        label={<Typography >نام</Typography>}
                        InputProps={{ readOnly: false, }}
                        variant="standard"
                        inputProps={{ min: 1, style: { textAlign: 'right' } }}
                        sx={{ marginTop:"1rem"}}
                    />
                    <TextField
                        id=""
                        label={<Typography >نام کاربری</Typography>}
                        InputProps={{ readOnly: false, }}
                        variant="standard"
                        inputProps={{ min: 1, style: { textAlign: 'left' } }}
                        sx={{ marginTop:"1rem"}}
                    />
                    <TextField
                        id=""
                        label={<Typography >رمز عبور</Typography>}
                        type="password"
                        InputProps={{ readOnly: false, }}
                        variant="standard"
                        inputProps={{ min: 4, style: { textAlign: 'left' } }}
                        sx={{ marginTop:"1rem"}}
                    />
                                    <TextField
                        id=""
                        label={<Typography >ایمیل</Typography>}
                        type="email"
                        InputProps={{ readOnly: false, }}
                        variant="standard"
                        inputProps={{ min: 4, style: { textAlign: 'left' } }}
                        sx={{ marginTop:"1rem"}}
                    />
                    

                    
                    
                    <Grid container >
                        <Grid item xs={12} sm ={6}>
                        
                        <Button  variant="outlined" sx={{ fontSize: '1.2rem', marginTop: "1rem", color: "#EF667D" , width:"90%"}} color="error" className="cansel_button input">لغو</Button>
                        </Grid>
                        <Grid item xs={12} sm ={6}>
                            <Button variant="contained" sx={{ fontSize: '1.2rem', marginTop: "1rem", backgroundColor: "#1885F2" , width:"90%"}} className=" input">تایید</Button>
                        </Grid>
                    </Grid>
                    
                </FormGroup>
            </Card>
        </>
    )
}

export default Register
