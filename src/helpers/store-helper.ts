import { TOKEN_LS } from '@app/config/constants'

const storage = {
  getToken: () => localStorage.getItem(TOKEN_LS),
  setToken: (token: string) => localStorage.setItem(TOKEN_LS, token),
  removeToken: () => localStorage.removeItem(TOKEN_LS),
}

export default storage
