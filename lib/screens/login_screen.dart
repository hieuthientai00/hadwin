import 'package:flutter/material.dart';
import 'package:hadwin/hadwin_components.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            SizedBox(height: 64),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 10.0),
              child: Image(
                image: AssetImage(
                    'assets/images/hadwin_system/hadwin-logo-with-name.png'),
              ),
            ),
            SizedBox(height: 64),
            LoginFormComponent(),
            SizedBox(height: 30),
            Container(
              child: Center(
                child: InkWell(
                  child: Text(
                    'Having trouble logging in?',
                    style: TextStyle(fontSize: 14, color: Color(0xFF929BAB)),
                  ),
                  onTap: () {
                    Navigator.push(
                      context,
                      SlideRightRoute(
                        page: HadWinMarkdownViewer(
                          screenName: 'Login Help',
                          urlRequested:
                              'https://raw.githubusercontent.com/brownboycodes/HADWIN/master/docs/HADWIN_WIKI.md',
                        ),
                      ),
                    );
                  },
                ),
              ),
              width: double.infinity,
              height: 36,
            ),
            SizedBox(height: 10),
            Container(
              child: Center(
                child: InkWell(
                  child: Text(
                    'Sign up',
                    style: TextStyle(fontSize: 14, color: Color(0xFF929BAB)),
                  ),
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => SignUpScreen(),
                      ),
                    );
                  },
                ),
              ),
              width: double.infinity,
              height: 36,
            ),
          ],
        ),
        padding: EdgeInsets.all(45),
      ),
    );
  }
}
