import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  // box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
  box-shadow: 0px 0px 2.5px rgb(0, 0, 139);
`;

export const MutedLink = styled.a`
  font-size: 11px;
  // color: rgba(200, 200, 200, 0.8);
  color: rgb(0, 0, 139);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
   // color: rgb(241, 196, 15); 
  color: rgb(0, 0, 139);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  // border: 1px solid rgba(200, 200, 200, 0.3);
  border: 1px solid rgba(0, 0, 139,0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    // color: rgba(200, 200, 200, 1);
    color: rgba(0, 0, 139,1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgb(0, 0, 139, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgba(0, 0, 139, 0.4);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(0, 0, 139);
   background: rgb(0, 0, 139);
  background: linear-gradient(
    58deg,
    rgba(0, 0, 139), 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;
