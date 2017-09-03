defmodule ElmPhoenixStarter.PageController do
  use ElmPhoenixStarter.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
