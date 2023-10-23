const version = Date.now().toString();
console.log(version);

const modes = {
  PW: 'password',
  PP: 'passphrase'
};

const initParams = {
  [modes.PW]: {
    length: 16,
    upper: true,
    lower: true,
    numbers: true,
    symbols: false
  },
  [modes.PP]: {
    length: 5,
    delimiter: 'hyphen'
  }
};

const localStorageKeys = {
  params: `pwgen-joeb-dev-params-${version}`,
  mode: `pwgen-joeb-dev-mode-${version}`
};

const strengthsEnum = {
  OK: 'kinda weak',
  GOOD: 'pretty decent',
  STRONG: 'super strong'
};

export default {
  version,
  modes,
  initParams,
  localStorageKeys,
  strengthsEnum,
  GAPropertyId: 'UA-140727716-6'
};

/*
  background: linear-gradient(
  174deg,
  ${p => p.theme.colors.paleYellow},
  ${p => p.theme.colors.paleYellow} 45rem, 
  ${p => p.theme.colors.offWhite} 45rem,
  ${p => p.theme.colors.offWhite}
), ${p => p.theme.colors.offWhite};
*/