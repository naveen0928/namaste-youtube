import OpenAI from "openai";
import { OPENAI_GPT } from "./Constants";

const openai = new OpenAI({
apiKey: OPENAI_GPT,
dangerouslyAllowBrowser: true
});

export default openai;
