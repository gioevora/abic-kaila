"use client";
import { Card, CardBody, Link } from "@nextui-org/react";
import React from "react";
import { FaFacebook, FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const ContactInfoCard = () => {
  return (
    <div className="flex flex-col gap-2 py-6">
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <div className="bg-violet-200 text-violet-800 px-2 py-2 rounded-lg">
            <FaPhone className="text-violet-700" size={20} />
          </div>
          <Link href={"tel:09265536964"}>(+63) 926 553 6964</Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-violet-200 text-violet-800 px-2 py-2 rounded-lg">
            <MdMail className="text-violet-700" size={20} />
          </div>

          <Link href={"mailto:abicrealtycorporation@gmail.com"}>
            abicrealtycorporation@gmail.com
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-violet-200 text-violet-800 px-2 py-2 rounded-lg">
            <FaFacebook className="text-violet-700" size={20} />
          </div>

          <Link
            href={"https://www.facebook.com/share/15JSPKVF7E/?mibextid=wwXIfr"}
          >
            AbicRealty Corp
          </Link>
        </div>
      </div>
      <hr className="max-w-2xl mt-4" />

      <div className="py-4">
        <h1 className="font-semibold">For Other Concerns:</h1>
        <div className="ml-4 py-2">
          <p className="text-base">
            Location: <Link
              href="https://www.google.com/maps/search/?api=1&query=Unit+202,+Campos+Rueda,+Urban+Ave.,+Makati+City+Metro+Manila,+PH+1233"
              target="_blank"
              rel="noopener noreferrer"
              className="break-words"
            >
               Unit 202, Campos Rueda, Urban Ave., Makati City, Metro Manila, PH 1233
            </Link>
          </p>
          <p className="text-base">
            Sales: <Link href={"tel:+639651983796"}>(+63) 965 198 3796</Link>
          </p>
          <p className="text-base">
            Leasings: <Link href={"tel:+639651983796"}>(+63) 965 198 3796</Link>
          </p>
          <p className="text-base">
            Employment Inquiry: <Link href={"tel:+639455493651"}>(+63) 945 549 3651</Link>
          </p>
          <p className="text-base">
            Customer Care (PHONE): <Link href={"tel:+639651983796"}>(+63) 965 198 3796</Link>
          </p>
          <p className="text-base">
            Customer Care (LANDLINE): <Link href={"tel:+63286466136"}>02-8646-6136</Link>
          </p>
        </div>
      </div>

      {/* <div className="py-4">
        <Card className="overflow-visible max-w-3xl">
          <CardBody>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                allowFullScreen
                className="w-full h-72 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.6867089763073!2d121.01350799999999!3d14.559899799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90b830e5f29%3A0x89fe307dfecd3c0d!2sCampos%20Rueda%20Building!5e0!3m2!1sen!2sph!4v1737683770378!5m2!1sen!2sph"
                title="Google Maps Embed for Campos Rueda Building"
              />
            </div>
          </CardBody>
        </Card>
      </div> */}
    </div>
  );
};

export default ContactInfoCard;
