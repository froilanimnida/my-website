import { BentoGridItem } from "@/components/ui";
import { Github, Instagram, LinkedIn } from "@/components/atoms";
import { ArrowRight, Send } from "lucide-react";
import Link from "next/link";
export const ContactMe = ({ className }: { className?: string }) => {
    return (
        <BentoGridItem
            className={className}
            title={<h1 className="text-lg">Contact Me</h1>}
            icon={<Send size={15} />}
            description={
                <div className="flex flex-col gap-5">
                    <div>
                        <h1>Email:</h1>
                        <div className="flex flex-col">
                            <Link
                                className="underline underline-offset-1 font-bold"
                                href="mailto:froilan.j.aquino@gmail.com"
                                target="_blank"
                            >
                                froilan.j.aquino@gmail.com
                            </Link>
                            <Link
                                className="underline underline-offset-1 font-bold"
                                href="mailto:aquino.froilan@outlook.com"
                                target="_blank"
                            >
                                aquino.froilan@outlook.com
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h1>Social Links:</h1>
                        <div className="flex flex-row gap-3 mt-2">
                            <Link
                                className="border-1 w-full justify-center flex items-center py-2 px-2 rounded-md"
                                aria-label="Github link of the website owner"
                                target="_blank"
                                href="https://github.com/froilanimnida"
                            >
                                <Github />
                            </Link>

                            <Link
                                className="border-1 w-full justify-center flex items-center py-2 px-2 rounded-md"
                                aria-label="Instagram Profile of the website owner"
                                target="_blank"
                                href="https://www.instagram.com/froilanimnida"
                            >
                                <Instagram />
                            </Link>

                            <Link
                                className="border-1 w-full justify-center flex items-center py-2 px-2 rounded-md"
                                aria-label="LinkedIn link of the website owner"
                                target="_blank"
                                href="https://linkedin.com/in/froilanimnida"
                            >
                                <LinkedIn />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h1>Let&apos;s talk:</h1>
                        <Link
                            href={"https://calendly.com/froilaniminida/15min"}
                            className="border-1 w-full justify-between flex items-center py-2 px-2 rounded-md mt-2"
                        >
                            Schedule a call
                            <ArrowRight size={15} />
                        </Link>
                    </div>
                    <div>
                        <h1>My Resume/CV:</h1>
                        <Link
                            href={"https://drive.google.com/file/d/1tBgDb_ft-XHI801KDlWLez21sBI48-AY/view?usp=sharing"}
                            className="border-1 w-full justify-between flex items-center py-2 px-2 rounded-md mt-2"
                        >
                            View my CV
                            <ArrowRight size={15} />
                        </Link>
                    </div>
                </div>
            }
        />
    );
};
