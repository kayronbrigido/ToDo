import AdvancedButton from "@components/molecules/AdvancedButton/AdvancedButton";
import AdvancedTextInput from "@components/molecules/AdvancedTextInput/AdvancedTextInput";
import { handleFocus } from "@services/index";
import { ICreateAccount } from "@src/models";
import { useRef, useState } from "react";
import * as S from './Signup.style';
import { translator } from "@services/translator";

export const Signup = () => {

  const [form, setForm] = useState<ICreateAccount>({});
  const [confirmPass, setConfirmPass] = useState('');
  const usernameRef = useRef();
  const passwordRef = useRef();
  const lastNameRef = useRef();
  const firstNameRef = useRef();
  const confirmPassRef = useRef();

  const handleSignup = () => {

    if(!form.username) {
      return handleFocus(usernameRef)
    }

    if(!form.password) {
      return handleFocus(passwordRef)
    }

    if(!form.firstName) {
      return handleFocus(firstNameRef)
    }

    if(!form.lastName) {
      return handleFocus(lastNameRef)
    }

    if(!confirmPass) {
      return handleFocus(confirmPass)
    }


  }


  return (
    <S.Container>
      <AdvancedTextInput
        ref={usernameRef}
        text={form?.username}
        placeholder={translator('GENERAL.USERNAME')}
        onChange={(e: string) => setForm({ ...form, username: e })}
        onSubmitEditing={() => handleFocus(passwordRef)}
      />
      <AdvancedTextInput
        ref={firstNameRef}
        text={form?.firstName}
        placeholder={translator('GENERAL.NAME')}
        onChange={(e: string) => setForm({ ...form, firstName: e })}
        onSubmitEditing={() => handleFocus(passwordRef)}
      />
      <AdvancedTextInput
        ref={lastNameRef}
        text={form?.lastName}
        placeholder={translator('GENERAL.LASTNAME')}
        onChange={(e: string) => setForm({ ...form, lastName: e })}
        onSubmitEditing={() => handleFocus(passwordRef)}
      />
      <AdvancedTextInput
        ref={passwordRef}
        text={form?.password}
        placeholder={translator('GENERAL.PASSWORD')}
        onChange={(e: string) => setForm({ ...form, password: e })}
        onSubmitEditing={() => handleFocus(passwordRef)}
        secret
      />
      <AdvancedTextInput
        ref={confirmPassRef}
        text={confirmPass}
        placeholder={translator('GENERAL.PASSWORD_CONFIRM')}
        onChange={(e: string) => setConfirmPass(e)}
        onSubmitEditing={() => handleFocus(passwordRef)}
        secret
      />
      <AdvancedButton
        text={translator('GENERAL.SIGNUP')} onSubmit={handleSignup} />
    </S.Container>
  )
}

export default Signup;