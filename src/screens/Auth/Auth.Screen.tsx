import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'store/index';
import KeyboardAvoidingView from 'components/KeyboardAvoidingView/KeyboardAvoidingView';
import ScrollView from 'components/ScrollView/ScrollView';
import TopBar from 'components/TopBar/TopBar';
import AuthForm from 'screens/Auth/Auth.Form';

interface AuthScreenProps {
  currentStack: string;
  type: string;
}

const mapDispatch = (dispatch: Dispatch) => ({
  login: (payload: any) => dispatch.users.login(payload),
  signUp: (payload: any) => dispatch.users.signUp(payload),
});

const AuthScreen: FC<AuthScreenProps & ReturnType<typeof mapDispatch>> = ({
  login,
  signUp,
  type,
  currentStack,
}) => (
  <>
    <TopBar
      currentStack={currentStack}
      leftIconSize={19}
      title={`general.${type}`}
    />
    <KeyboardAvoidingView>
      <ScrollView>
        <AuthForm type={type} action={type === 'logIn' ? login : signUp} />
      </ScrollView>
    </KeyboardAvoidingView>
  </>
);

export default connect(null, mapDispatch)(AuthScreen);
