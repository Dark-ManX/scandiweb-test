import styled from "@emotion/styled";

export const ColorContainer = styled.div`
display: flex;
margin: 0 auto;
`

export const Label = styled.label`
position: relative;
display: inline-block;
width: 25px;
height: 25px;

&:not(:last-child) {
    margin-right: 10px;
}
`

export const ColorPickerGrey = styled.div`
display: block;
width: 100%;
height: 100%;
background-color: lightgrey;
position: absolute;
top: 0px;
cursor: pointer;
`

export const ColorPickerBlack = styled.div`
display: block;
width: 100%;
height: 100%;
background-color: black;
position: absolute;
top: 0px;
left: 15px;
cursor: pointer;
`

export const ColorPickerGreen = styled.div`
display: block;
width: 100%;
height: 100%;
background-color: green;
position: absolute;
top: 0px;
left: 30px;
cursor: pointer;
`

export const Input = styled.input`
visibility: hidden;

&:checked + div {
    border: 1px solid white;
    outline: 3px solid black;
}
`

export const FlexThumb = styled.li`
display: flex;
justify-content: center;
padding: 20px 0;
`

export const Image = styled.img`
width: 350px;
height: auto;
margin-right: 100px;
`

export const Form = styled.form`
display: flex;
justify-content: space-between;
`

export const Title = styled.p`
font-size: 30px;
line-height: 0;
`

export const Subtitle = styled.p`
font-weight: 700;
font-size: 18px;
line-height: 18px;
`

export const RadioSize = styled.label`
display: inline-block;
width: 63px;
padding: 13px 0;
border: 1px solid #1D1F22;
text-align: center;
`

export const SizeInput = styled.input`
display: none;

    &:checked + label {
        background-color: black;
        color: white;
    }
`

export const CardThumb = styled.div`
width: 292px;`