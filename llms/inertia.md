# inertia

> The Inertia.js adapter for Elixir/Phoenix.

## Docs

### Inertia (module)

The Inertia.js adapter for Elixir/Phoenix applications.

### Inertia.Controller (module)

Controller functions for rendering Inertia.js responses.

### Inertia.Controller.assign_errors/2 (function)

Assigns errors to the Inertia page data. This helper accepts any data that
implements the `Inertia.Errors` protocol. By default, this library implements
error serializers for `Ecto.Changeset` and bare maps.

If you are serializing your own errors maps, they should take the following shape:

    %{
      "name" => "Name is required",
      "password" => "Password must be at least 5 characters",
      "team.name" => "Team name is required",
    }

When assigning a changeset, you may optionally pass a message-generating function
to use when traversing errors. See [`Ecto.Changeset.traverse_errors/2`](https://hexdocs.pm/ecto/Ecto.Changeset.html#traverse_errors/2)
for more information about the message function.

    defp default_msg_func({msg, opts}) do
      Enum.reduce(opts, msg, fn {key, value}, acc ->
        String.replace(acc, "%{#{key}}", fn _ -> to_string(value) end)
      end)
    end

This default implementation performs a simple string replacement for error
message containing variables, like `count`. For example, given the following
error:

    {"should be at least %{count} characters", [count: 3, validation: :length, min: 3]}

The generated description would be "should be at least 3 characters". If you would
prefer to use the `Gettext` module for pluralizing and localizing error messages, you
can override the message function:

    conn
    |> assign_errors(changeset, fn {msg, opts} ->
      if count = opts[:count] do
        Gettext.dngettext(MyAppWeb.Gettext, "errors", msg, msg, count, opts)
      else
        Gettext.dgettext(MyAppWeb.Gettext, "errors", msg, opts)
      end
    end)

### Inertia.Controller.assign_errors/3 (function)

### Inertia.Controller.assign_prop/3 (function)

Assigns a prop value to the Inertia page data.

### Inertia.Controller.camelize_props/1 (function)

Enable (or disable) automatic conversion of prop keys from snake case (e.g.
`inserted_at`), which is conventional in Elixir, to camel case (e.g.
`insertedAt`), which is conventional in JavaScript.

### Examples - Inertia.Controller.camelize_props/1 (function)

Using `camelize_props` here will convert `first_name` to `firstName` in the
response props.

    conn
    |> assign_prop(:first_name, "Bob")
    |> camelize_props()
    |> render_inertia("Home")

You may also pass a boolean to the `camelize_props` function (to override any
previously-set or globally-configured value):

    conn
    |> assign_prop(:first_name, "Bob")
    |> camelize_props(false)
    |> render_inertia("Home")

### Inertia.Controller.camelize_props/2 (function)

### Inertia.Controller.clear_history/1 (function)

Instuct the client-side to clear the history.

### Inertia.Controller.clear_history/2 (function)

### Inertia.Controller.encrypt_history/1 (function)

Instuct the client-side to encrypt history for this page.

### Inertia.Controller.encrypt_history/2 (function)

### Inertia.Controller.force_inertia_redirect/2 (function)

Forces the Inertia.js client side to perform a redirect. This can be used as a
plug or inline when building a response.

This plug modifies the response to be a 409 Conflict response and include the
destination URL in the `x-inertia-location` header, which will cause the
Inertia client to perform a `window.location = url` visit.

**Note**: we automatically convert regular external redirects (via the Phoenix
`redirect` helper), but this function is useful if you need to force redirect
to a non-external route that is not handled by Inertia.

See https://inertiajs.com/redirects#external-redirects

### Examples - Inertia.Controller.force_inertia_redirect/2 (function)

conn
|> force_inertia_redirect()
|> redirect(to: "/non-inertia-powered-page")

### Inertia.Controller.inertia_always/1 (function)

Marks a prop value as "always included", which means it will be included in
the props on initial page load and subsequent partial loads (even when it's
not explicitly requested).

### Inertia.Controller.inertia_defer/1 (function)

Marks that a prop should fetched immediately after the page is loaded on the client-side.

### Inertia.Controller.inertia_defer/2 (function)

### Inertia.Controller.inertia_merge/1 (function)

Marks that a prop should be merged with existing data on the client-side.

### Inertia.Controller.inertia_optional/1 (function)

Marks a prop value as optional, which means it will only get evaluated if
explicitly requested in a partial reload.

Optional props will _only_ be included the when explicitly requested in a
partial reload. If you want to include the prop on first visit, you'll want to
use a bare anonymous function or named function reference instead.

    conn
    # ALWAYS included on first visit...
    # OPTIONALLY included on partial reloads...
    # ALWAYS evaluated...
    |> assign_prop(:cheap_thing, cheap_thing())

    # ALWAYS included on first visit...
    # OPTIONALLY included on partial reloads...
    # ONLY evaluated when needed...
    |> assign_prop(:expensive_thing, fn -> calculate_thing() end)
    |> assign_prop(:another_expensive_thing, &calculate_another_thing/0)

    # NEVER included on first visit...
    # OPTIONALLY included on partial reloads...
    # ONLY evaluated when needed...
    |> assign_prop(:super_expensive_thing, inertia_optional(fn -> calculate_thing() end))

### Inertia.Controller.inertia_response?/1 (function)

Determines if a response has been rendered with Inertia.

### Inertia.Controller.preserve_case/1 (function)

Prevents auto-transformation of a prop key to camel-case (when
`camelize_props` is enabled).

### Example - Inertia.Controller.preserve_case/1 (function)

conn
|> assign_prop(preserve_case(:this_will_not_be_camelized), "value")
|> assign_prop(:this_will_be_camelized, "another_value")
|> camelize_props()
|> render_inertia("Home")

You can also use this helper inside of nested props:

    conn
    |> assign_prop(:user, %{
      preserve_case(:this_will_not_be_camelized) => "value",
      this_will_be_camelized: "another_value"
    })
    |> camelize_props()
    |> render_inertia("Home")

### Inertia.Controller.render_inertia/2 (function)

Renders an Inertia response.

### Options - Inertia.Controller.render_inertia/2 (function)

- `ssr`: whether to server-side render the response (see the docs on
  "Server-side rendering" in the README for more information on setting this
  up). Defaults to the globally-configured value, or `false` if no global
  config is specified.

### Examples - Inertia.Controller.render_inertia/2 (function)

conn
|> assign_prop(:user_id, 1)
|> render_inertia("SettingsPage")

You may pass additional props as map for the third argument:

    conn
    |> assign_prop(:user_id, 1)
    |> render_inertia("SettingsPage", %{name: "Bob"})

You may also pass options for the last positional argument:

    conn
    |> assign_prop(:user_id, 1)
    |> render_inertia("SettingsPage", ssr: true)

    conn
    |> assign_prop(:user_id, 1)
    |> render_inertia("SettingsPage", %{name: "Bob"}, ssr: true)

### Inertia.Controller.render_inertia/3 (function)

### Inertia.Controller.render_inertia/4 (function)

### Inertia.Controller.prop_key/0 (type)

### Inertia.Controller.raw_prop_key/0 (type)

### Inertia.Controller.render_opt/0 (type)

### Inertia.Controller.render_opts/0 (type)

### Inertia.Errors (protocol)

Converts a value to Inertia.js-compatible [validation
errors](https://inertiajs.com/validation).

This protocol allows you to transform various error structures into the format
expected by Inertia.js for client-side validation. The protocol converts error
structures into a flat map where keys represent field paths and values are error
messages.

### Built-in Implementations - Inertia.Errors (protocol)

This library includes default implementations for:

- `Ecto.Changeset` - Converts changeset errors to Inertia-compatible format
- `Map` - Validates and passes through properly formatted error maps

### Usage with Ecto.Changeset - Inertia.Errors (protocol)

```elixir
# In your controller action
def create(conn, %{"post" => post_params}) do
  case Posts.create(post_params)
    # Handle successful validation
    {:ok, post} ->
      redirect(conn, to: ~p"/posts/#{post}")

    # Convert changeset errors and share them with Inertia
    {:error, changeset} ->
      conn
      |> assign_errors(changeset)
      |> redirect(conn, to: ~p"/posts/new")
  end
end
```

The `assign_errors/2` function is a convenience helper provided by `Inertia.Controller`
that internally uses `Inertia.Errors.to_errors/1` to serialize the changeset errors
and share them with the Inertia page under the `errors` key.

### Custom Error Formatting - Inertia.Errors (protocol)

You can provide a custom message formatting function as the second argument to
`to_errors/2`:

```elixir
Inertia.Errors.to_errors(changeset, fn {msg, opts} ->
  # Custom error message formatting logic
  Gettext.dgettext(MyApp.Gettext, "errors", msg, opts)
end)
```

### Implementing for Custom Types - Inertia.Errors (protocol)

You can implement this protocol for your own error types:

```elixir
defimpl Inertia.Errors, for: MyApp.ValidationError do
  def to_errors(validation_error) do
    # Convert your custom error structure to a map of field paths to error
    # messages
    %{
      "field_name" => validation_error.message,
      "nested.field" => "Another error message"
    }
  end

  def to_errors(validation_error, _msg_func) do
    # Custom implementation with message function
    to_errors(validation_error)
  end
end
```

### Inertia.Errors.to_errors/1 (function)

### Inertia.Errors.to_errors/2 (function)

### Inertia.Errors.t/0 (type)

All the types that implement this protocol.

### Inertia.HTML (module)

HTML components for Inertia views.

### Inertia.HTML.inertia_head/1 (function)

### Attributes - Inertia.HTML.inertia_head/1 (function)

- `content` (`:list`) (required) - The list of tags to inject into the `head` tag.

### Inertia.HTML.inertia_title/1 (function)

Renders a ` ` tag that includes the `inertia` attribute needed for the
Inertia.js client-side to subsequently manage the page title.

The content you provide to this component will only apply to the initial
server-rendered response. You will also need to use the [client-side ` `
component](https://inertiajs.com/title-and-meta) in your Inertia page
components to be sure the the page title is updated when internal navigation
occurs.

If you are planning to manage page titles from the server-side, you may find
it useful to expose the `page_title` via regular assigns (so your
`<.inertia_title>` can use it) AND via Inertia page props (so your client-side
` ` use it):

    def index(conn, _params)
      page_title = "Your page title"

      conn
      |> assign(:page_title, page_title)
      |> assign_prop(:page_title, page_title)
      |> render_inertia("YourPage")
    end

### Attributes - Inertia.HTML.inertia_title/1 (function)

- `prefix` (`:string`) - A prefix added before the content of `inner_block`. Defaults to `nil`.
- `suffix` (`:string`) - A suffix added after the content of `inner_block`. Defaults to `nil`.

### Slots - Inertia.HTML.inertia_title/1 (function)

- `inner_block` (required) - Content rendered inside the `title` tag.

### Inertia.Plug (module)

The plug module for detecting Inertia.js requests.

### Inertia.Plug.call/2 (function)

### Inertia.Plug.init/1 (function)

### Inertia.SSR (module)

A supervisor that provides SSR support for Inertia views. This module is
responsible for starting a pool of Node.js processes that can run the SSR
rendering function for your application.

### Inertia.SSR.child_spec/1 (function)

Returns a specification to start this module under a supervisor.

See `Supervisor`.

### Inertia.SSR.start_link/1 (function)

Starts the SSR supervisor and accompanying Node.js workers.

### Options - Inertia.SSR.start_link/1 (function)

- `:path` - (required) the path to the directory where your `ssr.js` file lives.
- `:module` - (optional) the name of the Node.js module file. Defaults to "ssr".
- `:pool_size` - (optional) the number of Node.js workers. Defaults to 4.

### Inertia.Testing (module)

Helpers for testing Inertia responses.

### Inertia.Testing.inertia_component/1 (function)

Fetches the Inertia component (if applicable) for the current request.

### Example - Inertia.Testing.inertia_component/1 (function)

use MyAppWeb.ConnCase

    import Inertia.Testing

    describe "GET /" do
      test "renders the home page", %{conn: conn} do
        conn = get("/")
        assert inertia_component(conn) == "Home"
      end
    end

### Inertia.Testing.inertia_errors/1 (function)

Fetches the Inertia errors (if applicable) for the current request.

If there are errors available in the current page props, they will be returned.
Otherwise, errors that have been stored in the session will be retrieved.

### Example - Inertia.Testing.inertia_errors/1 (function)

use MyAppWeb.ConnCase

    import Inertia.Testing

    describe "POST /users" do
      test "fails when name empty", %{conn: conn} do
        conn = post("/users", %{"name" => ""})

        assert %{user: %{id: 1}} = inertia_props(conn)
        assert redirected_to(conn) == ~p"/users"
        assert inertia_errors(conn) == %{"name" => "can't be blank"}
      end
    end

### Inertia.Testing.inertia_props/1 (function)

Fetches the Inertia props (if applicable) for the current request.

### Example - Inertia.Testing.inertia_props/1 (function)

use MyAppWeb.ConnCase

    import Inertia.Testing

    describe "GET /" do
      test "renders the home page", %{conn: conn} do
        conn = get("/")
        assert %{user: %{id: 1}} = inertia_props(conn)
      end
    end

## Links

- [Online documentation](https://hexdocs.pm/inertia)
