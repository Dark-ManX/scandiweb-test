import styled from "@emotion/styled";

export const Backdrop = styled.div`
background-color: rgba(57, 55, 72, 0.22);
width: 100%;
height: 100%;
position: fixed;
top: 78px;
left: 0;
`;

export const ModalContainer = styled.div`
background-color: white;
position: absolute;
top: 0;
right: 72px;
width: 325px;
height: 677px;
padding: 10px;
overflow-y: scroll;
`;