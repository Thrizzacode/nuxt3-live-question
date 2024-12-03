import { configure, defineRule } from "vee-validate";
import { required, min, email } from "@vee-validate/rules";

import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

export default defineNuxtPlugin((nuxtApp) => {
  defineRule("required", required);
  defineRule("min", min);
  defineRule("email", email);

  configure({
    generateMessage: localize("zh_TW", zhTW),
    validateOnInput: true,
  });

  setLocale("zh_TW");
});
