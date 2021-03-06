import Boot from '@zerooneit/expressive-tea/classes/Boot';
import {Pour, RegisterModule, ServerSettings, Static} from '@zerooneit/expressive-tea/decorators/server';
import ExpressPlugin from '@server/plugins/express';
import RootModule from '@app/root/RootModule';
import {ExpressiveTeaApplication} from '@zerooneit/expressive-tea/libs/interfaces';



@Pour(ExpressPlugin)
@Static('./public')
@ServerSettings({
  port: 8080,
  privateKey: './certs/key.pem',
  certificate: './certs/cert.pem'
})
class Bootstrap extends Boot {
  @RegisterModule(RootModule)
  async start(): Promise<ExpressiveTeaApplication> {
    return super.start();
  }
}

export default new Bootstrap().start()
  .catch(e => console.error(e));
