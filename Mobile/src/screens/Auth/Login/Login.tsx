import { useRef, useState } from "react";
import { Text, View } from "react-native"
import { handleFocus } from "@services/index";

import Style from './Login.style';
import AdvancedButton from "@components/molecules/AdvancedButton/AdvancedButton";
import AdvancedTextInput from "@components/molecules/AdvancedTextInput/AdvancedTextInput";



export const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' })
  const usernameRef = useRef();
  const passwordRef = useRef();


  const handleLogin = () => {

    if(!form.username) {
      return handleFocus(usernameRef)
    }

    if(!form.password) {
      return handleFocus(passwordRef)
    }
  }

  return (
    <View style={Style.container}>
      <Text>Login</Text>
      <AdvancedTextInput
        ref={usernameRef}
        text={form.username}
        placeholder="username"
        onChange={(e: string) => setForm({ ...form, username: e })}
        onSubmitEditing={() => handleFocus(passwordRef)}
      />
      <AdvancedTextInput
        ref={passwordRef}
        text={form.password}
        placeholder="Password"
        onChange={(e: string) => setForm({ ...form, password: e })}
        onSubmitEditing={() => handleFocus(usernameRef)}
      />
      <AdvancedButton 
        text="Entrar" onSubmit={handleLogin} />
        
    </View>
  )
}

export default Login;