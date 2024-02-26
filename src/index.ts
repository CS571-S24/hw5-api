import fs from 'fs'

import express, { Express } from 'express';

import { CS571DefaultSecretConfig, CS571Initializer } from '@cs571/s24-api-framework'
import HW5PublicConfig from './model/configs/hw5-public-config';
import BadgerBudDetail from './model/bud-detail';
import { CS571BudsRoute } from './routes/buds';

console.log("Welcome to HW5!");

const app: Express = express();

const appBundle = CS571Initializer.init<HW5PublicConfig, CS571DefaultSecretConfig>(app, {
  allowNoAuth: [],
  skipAuth: false
});

const makeBudDetail = (bud: any) => new BadgerBudDetail(
  bud.id,
  bud.name,
  bud.age,
  bud.breed,
  bud.gender,
  bud.colors,
  bud.declawed,
  bud.imgIds,
  bud.description
);

const buds = JSON.parse(fs.readFileSync("includes/cats.json").toString()).map(makeBudDetail)


appBundle.router.addRoutes([
  new CS571BudsRoute(buds)
])

app.listen(appBundle.config.PORT, () => {
  console.log(`Running at :${appBundle.config.PORT}`);
});
