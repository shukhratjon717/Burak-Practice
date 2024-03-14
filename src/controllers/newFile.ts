import { Response } from "express";
import { AdminRequest, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { Message } from "../libs/Error";
import { restaurantController, memberService } from "./restaurant.controller";

restaurantController.processSignup = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("processSignup");
    const file = req.file;

    const newMember: MemberInput = req.body;
    newMember.memberImage = file?.path;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignup(newMember);
    //TODO: SESSIONS AUTHENTICATON
    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("Error, processSignup:", err);
    const messsage =
      err instanceof Errors ? err.message : Message.SOEMTHING_WENT_WRONG;
    res.send(
      `<script> alert("${messsage}) window.location.replace("admin/login") </script>`
    );
  }
};
