
import { launch } from "puppeteer";
import { Url } from "url";

export async function main(args: {url: Url}) {
    const url = "https://"+(args.url.host ? args.url.host + args.url.path : args.url.href);

    console.log("Opening " + url);

    await launch({headless: false, args: ["--app="+url]});
}
