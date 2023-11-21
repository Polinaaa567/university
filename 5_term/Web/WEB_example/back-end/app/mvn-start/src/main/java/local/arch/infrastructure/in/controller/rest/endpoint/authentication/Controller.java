package local.arch.infrastructure.in.controller.rest.endpoint.authentication;

import jakarta.ws.rs.Path;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;

import jakarta.ws.rs.Produces;

import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.QueryParam;

import local.arch.infrastructure.builder.Built;
import local.arch.application.IService;

@Path("/")
public class Controller {

	@Inject
	@Built
	IService service;

	@GET
	@Path("/authentication")
	@Produces("text/plain")
	public Response service(@QueryParam("username") String login,
			@QueryParam("password") String password) {

		System.out.println(String.format("%s + %s", login, password));
		String check = service.check(login, password);

		return Response.ok(check).build();
	}
}