import AdvancedButton from "@components/molecules/AdvancedButton/AdvancedButton";
import AdvancedTextInput from "@components/molecules/AdvancedTextInput/AdvancedTextInput";
import { handleFocus } from "@services/index";
import { ICreateAccount } from "@src/models";
import React, { useEffect, useRef, useState } from "react";
import * as S from './Signup.style';
import { translator } from "@services/translator";
import { useDispatch } from "react-redux";
import { handleActionCreateAccount } from "@src/store/redux/account/accountActions";
import { Keyboard } from "react-native";
import { useAppDispatch } from "@src/hooks/useRedux";
import { MessageError } from "@services/toasty";


export const Signup = () => {

  const [form, setForm] = useState<ICreateAccount>({});
  const [confirmPass, setConfirmPass] = useState('');
  const [showButton, setShowButton] = useState(true);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const lastNameRef = useRef();
  const firstNameRef = useRef();
  const confirmPassRef = useRef();
  const dispatch = useAppDispatch()

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setShowButton(false); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setShowButton(true); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleSignup = async () => {

    if (!form.username) {
      handleFocus(usernameRef)
      return MessageError('USERNAME_EMPTY')
    }

    if (!form.firstName) {
      handleFocus(firstNameRef)
      return MessageError('FIRSTNAME_EMPTY')
    }

    if (!form.lastName) {
      handleFocus(lastNameRef)
      return MessageError('LASTNAME_EMPTY')
    }

    if (!form.password) {
      handleFocus(passwordRef)
      return MessageError('PASSWORD_EMPTY')
    }

    if (!confirmPass) {
      handleFocus(confirmPass)
      return MessageError('PASSWORD_COMFIRM_EMPTY')
    }

    if (confirmPass !== form.password) {
      return MessageError('PASSWORD_NOT_MATCH')
    }

    dispatch(handleActionCreateAccount(form, err => {
      if(err && err.message) {
        return MessageError(err.message)
      }
    }))


  }

  return (
    <S.Container>
      <S.Scroll showsVerticalScrollIndicator={false}>
        <S.InputContainer>
          <AdvancedTextInput
            ref={usernameRef}
            text={form?.username}
            placeholder={translator('GENERAL.USERNAME')}
            onChange={(e: string) => setForm({ ...form, username: e })}
          />
          <AdvancedTextInput
            ref={firstNameRef}
            text={form?.firstName}
            placeholder={translator('GENERAL.NAME')}
            onChange={(e: string) => setForm({ ...form, firstName: e })}
          />
          <AdvancedTextInput
            ref={lastNameRef}
            text={form?.lastName}
            placeholder={translator('GENERAL.LASTNAME')}
            onChange={(e: string) => setForm({ ...form, lastName: e })}
          />
          <AdvancedTextInput
            ref={passwordRef}
            text={form?.password}
            placeholder={translator('GENERAL.PASSWORD')}
            onChange={(e: string) => setForm({ ...form, password: e })}
            secret
          />
          <AdvancedTextInput
            ref={confirmPassRef}
            text={confirmPass}
            placeholder={translator('GENERAL.PASSWORD_CONFIRM')}
            onChange={(e: string) => setConfirmPass(e)}
            secret
          />
        </S.InputContainer>
      </S.Scroll>
      <S.ButtonContainer>
        {
          showButton ?
          <AdvancedButton
          text={translator('GENERAL.SIGNUP')} onSubmit={handleSignup} /> : <></>
        }
        
      </S.ButtonContainer>
    </S.Container>
  )
}

export default Signup;