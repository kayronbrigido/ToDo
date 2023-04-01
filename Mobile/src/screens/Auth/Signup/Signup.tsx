import AdvancedButton from "@components/molecules/AdvancedButton/AdvancedButton";
import AdvancedTextInput from "@components/molecules/AdvancedTextInput/AdvancedTextInput";
import { handleFocus } from "@services/index";
import { ICreateAccount } from "@src/models";
import { useRef, useState } from "react";
import * as S from './Signup.style';

export const Signup = () => {

  const [form, setForm] = useState<ICreateAccount>({});
  const usernameRef = useRef();
  const passwordRef = useRef();
  const lastNameRef = useRef();
  const firstNameRef = useRef();

  const handleSignup = () => {


  }


  return (
    <S.Container>
      <AdvancedTextInput
        ref={usernameRef}
        text={form?.username}
        placeholder="Username"
        onChange={(e: string) => setForm({ ...form, username: e })}
        onSubmitEditing={() => handleFocus(passwordRef)}
      />
      <AdvancedTextInput
        ref={passwordRef}
        text={form?.password}
        placeholder="Password"
        onChange={(e: string) => setForm({ ...form, password: e })}
        onSubmitEditing={() => handleFocus(passwordRef)}
      />
      <AdvancedTextInput
        ref={firstNameRef}
        text={form?.firstName}
        placeholder="FirstName"
        onChange={(e: string) => setForm({ ...form, firstName: e })}
        onSubmitEditing={() => handleFocus(passwordRef)}
      />
      <AdvancedTextInput
        ref={lastNameRef}
        text={form?.lastName}
        placeholder="LastName"
        onChange={(e: string) => setForm({ ...form, lastName: e })}
        onSubmitEditing={() => handleFocus(passwordRef)}
      />
      <AdvancedButton
        text="Cadastrar" onSubmit={handleSignup} />
    </S.Container>
  )
}

export default Signup;