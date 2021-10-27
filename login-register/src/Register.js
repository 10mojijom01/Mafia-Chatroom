import React from 'react'
import { Card, TextField, Typography, Switch, Stack, Button, FormGroup, Grid ,Link} from '@mui/material';
import './Register.css'
import GoogleIcon from '@mui/icons-material/Google';


function Register() {

    return (
        <>
            <Card sx={{width:{xs:"100vw", sm:"fit-content"} , position:"absolute" ,borderRadius:{xs:"0" , sm:"5px"} , left:{sm:"50%" , xs:"0%"} ,top:{sm:"50%" , xs:"0%"} ,transform:{sm:"translate(-50% , -50%)" , xs:"translate(00% , 00%)"},padding:{sm:"16px 6px " , xs:"0px 0px"} , display:{xs:"grid" , sm:"unset"} , height:{xs:"100vh" , sm:"auto"} , gridTemplateRows:{xs:"min-content min-content auto" , sm:""} ,gridTemplate:{xs:"auto", sm:""}}}  >
                <Stack direction="row" spacing={1} alignItems="center"  className="toggler input" sx={{width:"fit-content" , marginLeft:{xs:"50vw" , sm:"50%"} , transform:"translateX(-50%)" , marginTop:{xs:"1rem" , sm:"0px"}}}>
                        <Typography>ورود</Typography>
                        <Switch defaultChecked onChange={(e) => { 

                            if(e.target.checked){
                                document.querySelector(".forms_slider").classList.remove("login")
                            }else{
                                document.querySelector(".forms_slider").classList.add("login")
                            }

                        } } />
                        <Typography>عضویت</Typography>

                </Stack>
                <Button  variant="contained" sx={{ fontSize: '1.2rem'  , marginTop: "1rem" , width:{xs:"70vw" , sm:"30vw"}, left:{xs:"50vw" , sm:"50%"}, transform:"translateX(-50%)" , display:"flex" , justifyContent:"space-between"}} sm={{width:"50%"}}  className="cansel_button input"><GoogleIcon  /><Typography sx={{fontSize:"1.2rem"}}>اتصال با جیمیل</Typography></Button>
                <Card className="forms_slider" sx={{boxShadow:"none" ,width:{xs:"200vw" , sm:"200%"}, transition:"0.5s" ,minWidth:{xs:"0" , sm:"600px"} , display:"grid" , gridTemplateColumns:{xs:"100vw 100vw" , sm:"50% 50%"} }}>
                    <FormGroup className="form" sx={{  overflow:"auto" ,minWidth:{xs:"0px" , sm:"300px"},display:{xs:"grid" , sm:""} , padding:{sm:"15px 15px " , xs:"0px 0px"} }}>

                        <TextField
                            id=""
                            label={<Typography >نام</Typography>}
                            InputProps={{ readOnly: false, }}
                            variant="standard"
                            inputProps={{ min: 1, style: { textAlign: 'right' } }}
                            sx={{ marginTop:"1rem" , marginLeft:{sm:"0" , xs:"15px"}, marginRight:{sm:"0" , xs:"15px"}}}
                        />
                        <TextField
                            id=""
                            label={<Typography >نام کاربری</Typography>}
                            InputProps={{ readOnly: false, }}
                            variant="standard"
                            inputProps={{ min: 1, style: { textAlign: 'left' } }}
                            sx={{ marginTop:"1rem", marginLeft:{sm:"0" , xs:"15px"}, marginRight:{sm:"0" , xs:"15px"}}}
                        />
                        <TextField
                            id=""
                            label={<Typography >رمز عبور</Typography>}
                            type="password"
                            InputProps={{ readOnly: false, }}
                            variant="standard"
                            inputProps={{ min: 4, style: { textAlign: 'left' } }}
                            sx={{ marginTop:"1rem", marginLeft:{sm:"0" , xs:"15px"}, marginRight:{sm:"0" , xs:"15px"}}}
                        />
                                        <TextField
                            id=""
                            label={<Typography >ایمیل</Typography>}
                            type="email"
                            InputProps={{ readOnly: false, }}
                            variant="standard"
                            inputProps={{ min: 4, style: { textAlign: 'left' } }}
                            sx={{ marginTop:"1rem", marginLeft:{sm:"0" , xs:"15px"}, marginRight:{sm:"0" , xs:"15px"}}}
                        />
                        

                        
                        
                        <Grid container justifyContent="center" sx={{marginTop:"auto"}} direction={{xs:"column-reverse" , sm:"row"}}>
                            <Grid item xs={8} sm ={6}  >
                            
                            <Button  variant="outlined" sx={{ fontSize: '1.2rem', marginTop: "1rem", marginBottom: {xs:"1rem" , sm:"0rem"} ,marginLeft:{xs:"10%" , sm:""}, color: "#EF667D" , width:{xs:"80%" , sm:"90%"}}} color="error" className="cansel_button input">لغو</Button>
                            </Grid>
                            <Grid item xs={8} sm ={6} >
                                <Button variant="contained" sx={{ fontSize: '1.2rem', marginTop: "1rem", marginBottom: {xs:"0rem" , sm:"1rem"},marginLeft:{xs:"10%" , sm:""}, backgroundColor: "#1885F2" , width:{xs:"80%" , sm:"90%"}}} className=" input">تایید</Button>
                            </Grid>
                        </Grid>
                        
                    </FormGroup>
                    <FormGroup className="form" sx={{  overflow:"auto" ,minWidth:{xs:"0px" , sm:"300px"},display:{xs:"grid" , sm:""} , padding:{sm:"15px 15px " , xs:"0px 0px"} }}>


                        <TextField
                            id=""
                            label={<Typography >نام کاربری</Typography>}
                            InputProps={{ readOnly: false, }}
                            variant="standard"
                            inputProps={{ min: 1, style: { textAlign: 'left' } }}
                            sx={{ marginTop:"1rem", marginLeft:{sm:"0" , xs:"15px"}, marginRight:{sm:"0" , xs:"15px"}}}
                        />
                        <TextField
                            id=""
                            label={<Typography >رمز عبور</Typography>}
                            type="password"
                            InputProps={{ readOnly: false, }}
                            variant="standard"
                            inputProps={{ min: 4, style: { textAlign: 'left' } }}
                            sx={{ marginTop:"1rem", marginLeft:{sm:"0" , xs:"15px"}, marginRight:{sm:"0" , xs:"15px"}}}
                        />
                        <Link href="#" sx={{textAlign:"center" , with:"100%", cursor:"pointer"}}>فراموشی رمز عبور</Link>




                        <Grid container justifyContent="center" sx={{marginTop:"auto"}} direction={{xs:"column-reverse" , sm:"row"}}>
                            <Grid item xs={8} sm ={6}  >
                            
                            <Button  variant="outlined" sx={{ fontSize: '1.2rem', marginTop: "1rem", marginBottom: {xs:"1rem" , sm:"0rem"} ,marginLeft:{xs:"10%" , sm:""}, color: "#EF667D" , width:{xs:"80%" , sm:"90%"}}} color="error" className="cansel_button input">لغو</Button>
                            </Grid>
                            <Grid item xs={8} sm ={6} >
                                <Button variant="contained" sx={{ fontSize: '1.2rem', marginTop: "1rem", marginBottom: {xs:"0rem" , sm:"1rem"},marginLeft:{xs:"10%" , sm:""}, backgroundColor: "#1885F2" , width:{xs:"80%" , sm:"90%"}}} className=" input">تایید</Button>
                            </Grid>
                        </Grid>

                    </FormGroup>
                </Card>
            </Card>
        </>
    )
}

export default Register
