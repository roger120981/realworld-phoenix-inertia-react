# ash

> A declarative, extensible framework for building Elixir applications.

## Docs

### Ash.CodeInterface (module)

Used to define the functions of a code interface for a resource.

### Ash.CodeInterface.define_interface/3 (macro)

Defines the code interface for a given resource + domain combination in the current module. For example:

```elixir
defmodule MyApp.Accounting do
  require Ash.CodeInterface

  Ash.CodeInterface.define_interface(MyApp.Accounting, MyApp.Accounting.Transaction)
  Ash.CodeInterface.define_interface(MyApp.Accounting, MyApp.Accounting.Account)
  Ash.CodeInterface.define_interface(MyApp.Accounting, MyApp.Accounting.Invoice)
end
```

### Ash.CodeInterface.params_and_opts/3 (function)

See `params_and_opts/2`.

Adds a post process function that can takes the opts and can further process,
validate, or transform them.

### Ash.DataLayer (behaviour)

The behaviour for backing resource actions with persistence layers.

### Ash.DataLayer.add_aggregate/3 (callback)

### Ash.DataLayer.add_aggregates/3 (function)

### Ash.DataLayer.add_aggregates/3 (callback)

### Ash.DataLayer.add_calculation/4 (callback)

### Ash.DataLayer.add_calculations/3 (function)

### Ash.DataLayer.add_calculations/3 (callback)

### Ash.DataLayer.bulk_create/3 (function)

### Ash.DataLayer.bulk_create/3 (callback)

### Ash.DataLayer.bulk_create_options/0 (type)

### Ash.DataLayer.bulk_update_options/0 (type)

### Ash.DataLayer.calculate/3 (function)

### Ash.DataLayer.calculate/3 (callback)

### Ash.DataLayer.can?/2 (function)

### Ash.DataLayer.can?/2 (callback)

### Ash.DataLayer.combination_of/3 (function)

### Ash.DataLayer.combination_of/3 (callback)

### Ash.DataLayer.combination_type/0 (type)

### Ash.DataLayer.create/2 (function)

### Ash.DataLayer.create/2 (callback)

### Ash.DataLayer.data_layer/1 (function)

The data layer of the resource, or nil if it does not have one

### Ash.DataLayer.data_layer_can?/2 (function)

Whether or not the data layer supports a specific feature

### Ash.DataLayer.data_layer_functions/1 (function)

Custom functions supported by the data layer of the resource

### Ash.DataLayer.data_layer_query/0 (type)

### Ash.DataLayer.destroy/2 (function)

### Ash.DataLayer.destroy/2 (callback)

### Ash.DataLayer.destroy_query/3 (function)

### Ash.DataLayer.destroy_query/4 (callback)

### Ash.DataLayer.distinct/3 (function)

### Ash.DataLayer.distinct/3 (callback)

### Ash.DataLayer.distinct_sort/3 (function)

### Ash.DataLayer.distinct_sort/3 (callback)

### Ash.DataLayer.feature/0 (type)

### Ash.DataLayer.filter/3 (function)

### Ash.DataLayer.filter/3 (callback)

### Ash.DataLayer.functions/1 (function)

### Ash.DataLayer.functions/1 (callback)

### Ash.DataLayer.in_transaction?/1 (function)

### Ash.DataLayer.in_transaction?/1 (callback)

### Ash.DataLayer.lateral_join_link/0 (type)

### Ash.DataLayer.limit/3 (function)

### Ash.DataLayer.limit/3 (callback)

### Ash.DataLayer.lock/3 (function)

### Ash.DataLayer.lock/3 (callback)

### Ash.DataLayer.lock_type/0 (type)

### Ash.DataLayer.offset/3 (function)

### Ash.DataLayer.offset/3 (callback)

### Ash.DataLayer.prefer_lateral_join_for_many_to_many?/0 (callback)

### Ash.DataLayer.prefer_lateral_join_for_many_to_many?/1 (function)

Whether or not lateral joins should be used for many to many relationships by default

### Ash.DataLayer.prefer_transaction?/1 (function)

### Ash.DataLayer.prefer_transaction?/1 (callback)

### Ash.DataLayer.prefer_transaction_for_atomic_updates?/1 (function)

### Ash.DataLayer.prefer_transaction_for_atomic_updates?/1 (callback)

### Ash.DataLayer.resource_to_query/2 (function)

### Ash.DataLayer.resource_to_query/2 (callback)

### Ash.DataLayer.return_query/2 (function)

### Ash.DataLayer.return_query/2 (callback)

### Ash.DataLayer.rollback/2 (function)

Rolls back the current transaction

### Ash.DataLayer.rollback/2 (callback)

### Ash.DataLayer.run_aggregate_query/3 (function)

### Ash.DataLayer.run_aggregate_query/3 (callback)

### Ash.DataLayer.run_aggregate_query_with_lateral_join/5 (function)

### Ash.DataLayer.run_aggregate_query_with_lateral_join/5 (callback)

### Ash.DataLayer.run_query/2 (function)

### Ash.DataLayer.run_query/2 (callback)

### Ash.DataLayer.run_query_with_lateral_join/4 (function)

### Ash.DataLayer.run_query_with_lateral_join/4 (callback)

### Ash.DataLayer.select/3 (function)

### Ash.DataLayer.select/3 (callback)

### Ash.DataLayer.set_context/3 (function)

### Ash.DataLayer.set_context/3 (callback)

### Ash.DataLayer.set_tenant/3 (function)

### Ash.DataLayer.set_tenant/3 (callback)

### Ash.DataLayer.sort/3 (function)

### Ash.DataLayer.sort/3 (callback)

### Ash.DataLayer.source/1 (function)

### Ash.DataLayer.source/1 (callback)

### Ash.DataLayer.t/0 (type)

### Ash.DataLayer.transaction/4 (function)

Wraps the execution of the function in a transaction with the resource's data_layer

### Ash.DataLayer.transaction/4 (callback)

### Ash.DataLayer.transaction_reason/0 (type)

### Ash.DataLayer.transform_query/1 (function)

### Ash.DataLayer.transform_query/1 (callback)

### Ash.DataLayer.update/2 (function)

### Ash.DataLayer.update/2 (callback)

### Ash.DataLayer.update_query/3 (function)

### Ash.DataLayer.update_query/4 (callback)

### Ash.DataLayer.upsert/3 (callback)

### Ash.DataLayer.upsert/4 (function)

### Ash.DataLayer.upsert/4 (callback)

### Ash.Notifier (behaviour)

A notifier is an extension that receives various events

### Ash.Notifier.notify/1 (function)

Sends any notifications that can be sent, and returns the rest.

A notification can only be sent if you are not currently in a transaction
for the resource in question.

### Ash.Notifier.notify/1 (callback)

### Ash.Notifier.requires_original_data?/2 (callback)

### Ash.Notifier.Notification (module)

Represents a notification that will be handled by a resource's notifiers

Set the `for` key to a notifier or a list of notifiers to route the notification
to them. This allows you to produce notifications inside of a `change` module
and target specific notifiers with them.

`metadata` is freeform data to be set however you want. `resource`, `action`, `data`,
`changeset` and `actor` are all set by default based on the details of the action, so
they can be omitted.

When creating a notification, a resource is required to ensure that the notification isn't
sent until the current transaction for that resource is closed. If you don't need this
behavior you can explicitly supply `nil` for the resource. If you supply `nil` for the resource,
however, you must manually set the `for` option, e.g: `for: Notifier` or `for: [Notifier1, Notifier2]`

### Ash.Notifier.Notification.new/2 (function)

### Ash.Notifier.Notification.t/0 (type)

### Ash.Resource.Attribute.Helpers (module)

Helpers for building attributes

### Ash.Resource.Attribute.Helpers.timestamps/1 (macro)

Defines create and update timestamp attributes.

Shorthand for `d:Ash.Resource.Dsl.attributes.create_timestamp` and
`d:Ash.Resource.Dsl.attributes.update_timestamp` with the attribute names
`:inserted_at` and `:updated_at` respectively. Any options passed to this
helper are passed to both timestamp macros.

### Ash.Resource.Calculation (behaviour)

The behaviour for defining a module calculation, and the struct for storing a defined calculation.

### Ash.Resource.Calculation.calculate/3 (callback)

### Ash.Resource.Calculation.describe/1 (callback)

### Ash.Resource.Calculation.expression/2 (callback)

### Ash.Resource.Calculation.has_expression?/0 (callback)

### Ash.Resource.Calculation.init/1 (callback)

### Ash.Resource.Calculation.init/2 (function)

### Ash.Resource.Calculation.load/3 (callback)

### Ash.Resource.Calculation.opts/0 (type)

### Ash.Resource.Calculation.ref/0 (type)

### Ash.Resource.Calculation.schema/0 (function)

### Ash.Resource.Calculation.strict_loads?/0 (callback)

### Ash.Resource.Calculation.t/0 (type)

### Ash.Resource.Calculation.Builtins (module)

Built in calculations that are automatically imported in the calculations section

### Ash.Resource.Calculation.Builtins.concat/2 (function)

An example concatenation calculation, that accepts the delimiter as an argument

### Examples - Ash.Resource.Calculation.Builtins.concat/2 (function)

calculate :full_name, :string, concat([:first_name, :last_name], " ")

### Ash.Resource.ManualCreate (behaviour)

A module to implement manual create actions.

### Ash.Resource.ManualCreate.bulk_create/3 (callback)

### Ash.Resource.ManualCreate.create/3 (callback)

### Ash.Resource.ManualDestroy (behaviour)

A module to implement manual destroy actions.

Note that in the returns of these functions you must return the destroyed record or records.

### Ash.Resource.ManualDestroy.bulk_destroy/3 (callback)

### Ash.Resource.ManualDestroy.destroy/3 (callback)

### Ash.Resource.ManualRead (behaviour)

A module to implement manual read actions.

### Ash.Resource.ManualRead.context/0 (type)

### Ash.Resource.ManualRead.extra_info/0 (type)

### Ash.Resource.ManualRead.load_relationships/5 (callback)

### Ash.Resource.ManualRead.read/4 (callback)

### Ash.Resource.ManualRelationship (behaviour)

A module to implement manual relationships.

### Ash.Resource.ManualRelationship.load/3 (callback)

### Ash.Resource.ManualRelationship.select/1 (callback)

### Ash.Resource.ManualUpdate (behaviour)

A module to implement manual update actions.

### Ash.Resource.ManualUpdate.bulk_update/3 (callback)

### Ash.Resource.ManualUpdate.update/3 (callback)

### Ash (module)

The primary interface to call actions and interact with resources.

### Ash.actor/0 (type)

### Ash.aggregate/0 (type)

### Ash.aggregate/3 (function)

Runs an aggregate or aggregates over a resource query

If you pass an `%Ash.Query.Aggregate{}`, gotten from `Ash.Query.Aggregate.new()`,
the query provided as the first argument to this function will not apply. For this
reason, it is preferred that you pass in the tuple format, i.e

Prefer this:
`Api.aggregate(query, {:count_of_things, :count})`

Over this:
`Api.aggregate(query, Ash.Query.Aggregate.new(...))`

- `:domain` (`Ash.Domain`) - The domain to use.

- `:timeout` (`t:timeout/0`) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer that implements the `Ash.Tracer` behaviour. See that module for more.

- `:action` (`t:term/0`) - The action to use, either an Action struct or the name of the action

- `:authorize?` - If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

- `:context` (`t:map/0`) - Context to set on the query, changeset, or input

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - A tenant to set on the query or changeset

- `:actor` (`t:term/0`) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

### Ash.aggregate!/3 (function)

Runs an aggregate or aggregates over a resource query. See `aggregate/3` for more.

### Ash.avg/3 (function)

Fetches the average of all values of a given field.

### Ash.avg!/3 (function)

Fetches the average of all values of a given field or raises an error.

### Ash.bulk_create/4 (function)

Creates many records.

### Assumptions - Ash.bulk_create/4 (function)

We assume that the input is a list of changesets all for the same action, or a list of input maps for the
same action with the `:resource` and `:action` option provided to illustrate which action it is for.

### Performance/Feasibility - Ash.bulk_create/4 (function)

The performance of this operation depends on the data layer in question.
Data layers like AshPostgres will choose reasonable batch sizes in an attempt
to handle large bulk actions, but that does not mean that you can pass a list of
500k inputs and expect things to go off without a hitch (although it might).
If you need to do large data processing, you should look into projects like
GenStage and Broadway. With that said, if you want to do things like support CSV upload
and you place some reasonable limits on the size this is a great tool. You'll need to
test it yourself, YMMV.

Passing `return_records?: true` can significantly increase the time it takes to perform the operation,
and can also make the operation completely unreasonable due to the memory requirement. If you want to
do very large bulk creates and display all of the results, the suggestion is to annotate them with a
"bulk_create_id" in the data layer, and then read the records with that `bulk_create_id` so that they can
be retrieved later if necessary.

### Changes/Validations - Ash.bulk_create/4 (function)

Changes will be applied in the order they are given on the actions as normal. Any change that exposes
the `bulk_change` callbacks will be applied on the entire list.

### After Action Hooks - Ash.bulk_create/4 (function)

The following requirements must be met for `after_action` hooks to function properly. If they are not met,
and an after_action hook being applied to a changeset in a `change`.

1. `return_records?` must be set to `true`.
2. The changeset must be setting the primary key as part of its changes, so that we know which result applies to which
   changeset.

It is possible to use `after_action` hooks with `bulk_change/3`, but you need to return the hooks along with the changesets.
This allows for setting up `after_action` hooks that don't need access to the returned record,
or `after_action` hooks that can operate on the entire list at once. See the documentation for that callback for more on
how to do accomplish that.

### Options - Ash.bulk_create/4 (function)

- `:upsert?` (`t:boolean/0`) - If a conflict is found based on the primary key, the record is updated in the database (requires upsert support) The default value is `false`.

- `:upsert_identity` (`t:atom/0`) - The identity to use when detecting conflicts for `upsert?`, e.g. `upsert_identity: :full_name`. By default, the primary key is used. Has no effect if `upsert?: true` is not provided

- `:upsert_fields` - The fields to upsert. If not set, the action's `upsert_fields` is used. Unlike singular `create`, `bulk_create` with `upsert?` requires that `upsert_fields` be specified explicitly in one of these two locations.

- `:after_action` (function of arity 2) - An after_action hook to be added to each processed changeset

- `:upsert_condition` (`t:term/0`) - An expression to check if the record should be updated when there's a conflict.

- `:domain` (`Ash.Domain`) - The domain to use.

- `:timeout` (`t:timeout/0`) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer that implements the `Ash.Tracer` behaviour. See that module for more.

- `:authorize?` - If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - A tenant to set on the query or changeset

- `:actor` (`t:term/0`) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

- `:return_notifications?` (`t:boolean/0`) - Use this if you're running ash actions in your own transaction and you want to manually handle sending notifications.
  If a transaction is ongoing, and this is false, notifications will be discarded, otherwise
  the return value is `{:ok, result, notifications}` (or `{:ok, notifications}`)
  To send notifications later, use `Ash.Notifier.notify(notifications)`. It sends any notifications
  that can be sent, and returns the rest. The default value is `false`.

- `:rollback_on_error?` (`t:boolean/0`) - Whether or not to rollback the transaction on error, if the resource is in a transaction.
  If the action has `transaction? false` this option has no effect. If an error is returned from the
  data layer and the resource is in a transaction, the transaction is always rolled back, regardless. The default value is `true`.

- `:notification_metadata` (`t:term/0`) - Metadata to be merged into the metadata field for all notifications sent from this operation. The default value is `%{}`.

- `:read_action` (`t:atom/0`) - The action to use when building the read query.

- `:assume_casted?` (`t:boolean/0`) - Whether or not to cast attributes and arguments as input. This is an optimization for cases where the input is already casted and/or not in need of casting The default value is `false`.

- `:load` (`t:term/0`) - A load statement to apply to records. Ignored if `return_records?` is not true.

- `:select` (list of `t:atom/0`) - A select statement to apply to records. Ignored if `return_records?` is not true.

- `:authorize_query_with` - If set to `:error`, instead of filtering unauthorized query results, unauthorized query results will raise an appropriate forbidden error. Uses `authorize_with` if not set. Valid values are :filter, :error

- `:authorize_changeset_with` - If set to `:error`, instead of filtering unauthorized changes, unauthorized changes will raise an appropriate forbidden error. Uses `authorize_with` if not set. Valid values are :filter, :error

- `:authorize_with` - If set to `:error`, instead of filtering unauthorized query results, unauthorized query results will raise an appropriate forbidden error. Valid values are :filter, :error The default value is `:filter`.

- `:context` (`t:map/0`) - Context to set on each changeset

- `:sorted?` (`t:boolean/0`) - Whether or not to sort results by their input position, in cases where `return_records?: true` was provided. The default value is `false`.

- `:return_records?` (`t:boolean/0`) - Whether or not to return all of the records that were inserted. Defaults to false to account for large inserts. The default value is `false`.

- `:return_errors?` (`t:boolean/0`) - Whether or not to return all of the errors that occur. Defaults to false to account for large inserts. The default value is `true`.

- `:batch_size` (`t:pos_integer/0`) - The number of records to include in each batch. Defaults to the `default_limit`
  or `max_page_size` of the action, or 100.

- `:return_stream?` (`t:boolean/0`) - If set to `true`, instead of an `Ash.BulkResult`, a mixed stream is returned.
  Potential elements:
  `{:notification, notification}` - if `return_notifications?` is set to `true`
  `{:ok, record}` - if `return_records?` is set to `true`
  `{:error, error}` - an error that occurred. May be changeset or an individual error. The default value is `false`.

- `:return_nothing?` (`t:boolean/0`) - Mutes warnings about returning nothing.
  Only relevant if `return_stream?` is set to `true` and all other
  `return_*?` options are set to `false`. The default value is `false`.

- `:stop_on_error?` (`t:boolean/0`) - If true, the first encountered error will stop the action and be returned. Otherwise, errors
  will be skipped. The default value is `true`.

- `:notify?` (`t:boolean/0`) - Whether or not to generate any notifications. If this is set to `true` then the data layer must return
  the results from each batch. This may be intensive for large bulk actions.
  Notifications will be automatically sent unless `return_notifications?` is set to `true`. The default value is `false`.

- `:transaction` - Whether or not to wrap the entire execution in a transaction, each batch, or not at all.
  Keep in mind:
  `before_transaction` and `after_transaction` hooks attached to changesets will have to be run
  _inside_ the transaction if you choose `transaction: :all`.
  Valid values are :all, :batch, false The default value is `:batch`.

- `:max_concurrency` (`t:non_neg_integer/0`) - If set to a value greater than 0, up to that many tasks will be started to run batches asynchronously The default value is `0`.

- `:skip_unknown_inputs` - A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

### Ash.bulk_create!/4 (function)

Creates many records, raising any errors that are returned. See `bulk_create/4` for more.

### Ash.bulk_destroy/4 (function)

Destroys all items in the provided enumerable or query with the provided input.

The input is a map of valid inputs for the action. The input will be applied to all records in the enumerable/query.

If the data layer supports destroying from a query, and the destroy action can be done fully atomically,
it will be updated in a single pass using the data layer.

Otherwise, this will stream each record and update it.

### Options - Ash.bulk_destroy/4 (function)

- `:resource` (`Ash.Resource`) - The resource being destroyed. This must be provided if the input given is a stream, so we know ahead of time what the resource being updated is.

- `:stream_batch_size` (`t:integer/0`) - Batch size to use if provided a query and the query must be streamed

- `:authorize_query?` (`t:boolean/0`) - If a query is given, determines whether or not authorization is run on that query. The default value is `true`.

- `:strategy` - The strategy or strategies to enable. :stream is used in all cases if the data layer does not support atomics. Valid values are :atomic, :atomic_batches, :stream The default value is `:atomic`.

- `:filter` (`t:term/0`) - A filter to apply to records. This is also applied to a stream of inputs.

- `:allow_stream_with` - The 'worst' strategy allowed to be used to fetch records. See `Ash.stream!/2` docs for more. Valid values are :keyset, :offset, :full_read The default value is `:keyset`.

- `:stream_with` - The specific strategy to use to fetch records. See `Ash.stream!/2` docs for more. Valid values are :keyset, :offset, :full_read

- `:lock` (`t:term/0`) - A lock statement to add onto the query

- `:return_query?` (`t:boolean/0`) - If `true`, the query that was ultimately used is returned as a third tuple element.
  The query goes through many potential changes during a request, potentially adding
  authorization filters, or replacing relationships for other data layers with their
  corresponding ids. This option can be used to get the true query that was sent to
  the data layer. The default value is `false`.

- `:reuse_values?` (`t:boolean/0`) - Whether calculations are allowed to reuse values that have already been loaded, or must refetch them from the data layer. The default value is `false`.

- `:strict?` (`t:boolean/0`) - If set to true, only specified attributes will be loaded when passing
  a list of fields to fetch on a relationship, which allows for more
  optimized data-fetching.
  See `Ash.Query.load/2`. The default value is `false`.

- `:domain` (`Ash.Domain`) - The domain to use.

- `:timeout` (`t:timeout/0`) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer that implements the `Ash.Tracer` behaviour. See that module for more.

- `:action` (`t:term/0`) - The action to use, either an Action struct or the name of the action

- `:authorize?` - If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - A tenant to set on the query or changeset

- `:actor` (`t:term/0`) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

- `:return_notifications?` (`t:boolean/0`) - Use this if you're running ash actions in your own transaction and you want to manually handle sending notifications.
  If a transaction is ongoing, and this is false, notifications will be discarded, otherwise
  the return value is `{:ok, result, notifications}` (or `{:ok, notifications}`)
  To send notifications later, use `Ash.Notifier.notify(notifications)`. It sends any notifications
  that can be sent, and returns the rest. The default value is `false`.

- `:rollback_on_error?` (`t:boolean/0`) - Whether or not to rollback the transaction on error, if the resource is in a transaction.
  If the action has `transaction? false` this option has no effect. If an error is returned from the
  data layer and the resource is in a transaction, the transaction is always rolled back, regardless. The default value is `true`.

- `:notification_metadata` (`t:term/0`) - Metadata to be merged into the metadata field for all notifications sent from this operation. The default value is `%{}`.

- `:read_action` (`t:atom/0`) - The action to use when building the read query.

- `:assume_casted?` (`t:boolean/0`) - Whether or not to cast attributes and arguments as input. This is an optimization for cases where the input is already casted and/or not in need of casting The default value is `false`.

- `:load` (`t:term/0`) - A load statement to apply to records. Ignored if `return_records?` is not true.

- `:select` (list of `t:atom/0`) - A select statement to apply to records. Ignored if `return_records?` is not true.

- `:authorize_query_with` - If set to `:error`, instead of filtering unauthorized query results, unauthorized query results will raise an appropriate forbidden error. Uses `authorize_with` if not set. Valid values are :filter, :error

- `:authorize_changeset_with` - If set to `:error`, instead of filtering unauthorized changes, unauthorized changes will raise an appropriate forbidden error. Uses `authorize_with` if not set. Valid values are :filter, :error

- `:authorize_with` - If set to `:error`, instead of filtering unauthorized query results, unauthorized query results will raise an appropriate forbidden error. Valid values are :filter, :error The default value is `:filter`.

- `:context` (`t:map/0`) - Context to set on each changeset

- `:sorted?` (`t:boolean/0`) - Whether or not to sort results by their input position, in cases where `return_records?: true` was provided. The default value is `false`.

- `:return_records?` (`t:boolean/0`) - Whether or not to return all of the records that were inserted. Defaults to false to account for large inserts. The default value is `false`.

- `:return_errors?` (`t:boolean/0`) - Whether or not to return all of the errors that occur. Defaults to false to account for large inserts. The default value is `true`.

- `:batch_size` (`t:pos_integer/0`) - The number of records to include in each batch. Defaults to the `default_limit`
  or `max_page_size` of the action, or 100.

- `:return_stream?` (`t:boolean/0`) - If set to `true`, instead of an `Ash.BulkResult`, a mixed stream is returned.
  Potential elements:
  `{:notification, notification}` - if `return_notifications?` is set to `true`
  `{:ok, record}` - if `return_records?` is set to `true`
  `{:error, error}` - an error that occurred. May be changeset or an individual error. The default value is `false`.

- `:return_nothing?` (`t:boolean/0`) - Mutes warnings about returning nothing.
  Only relevant if `return_stream?` is set to `true` and all other
  `return_*?` options are set to `false`. The default value is `false`.

- `:stop_on_error?` (`t:boolean/0`) - If true, the first encountered error will stop the action and be returned. Otherwise, errors
  will be skipped. The default value is `true`.

- `:notify?` (`t:boolean/0`) - Whether or not to generate any notifications. If this is set to `true` then the data layer must return
  the results from each batch. This may be intensive for large bulk actions.
  Notifications will be automatically sent unless `return_notifications?` is set to `true`. The default value is `false`.

- `:transaction` - Whether or not to wrap the entire execution in a transaction, each batch, or not at all.
  Keep in mind:
  `before_transaction` and `after_transaction` hooks attached to changesets will have to be run
  _inside_ the transaction if you choose `transaction: :all`.
  Valid values are :all, :batch, false The default value is `:batch`.

- `:max_concurrency` (`t:non_neg_integer/0`) - If set to a value greater than 0, up to that many tasks will be started to run batches asynchronously The default value is `0`.

- `:skip_unknown_inputs` - A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

### Ash.bulk_destroy!/4 (function)

Destroys all items in the provided enumerable or query with the provided input.

See `bulk_destroy/4` for more.

### Ash.bulk_update/4 (function)

Updates all items in the provided enumerable or query with the provided input.

The input is a map of valid inputs for the action. The input will be applied to all records in the enumerable/query.

If the data layer supports updating from a query, and the update action can be done fully atomically,
it will be updated in a single pass using the data layer.

Otherwise, this will stream each record and update it.

### Options - Ash.bulk_update/4 (function)

- `:resource` (`Ash.Resource`) - The resource being updated. This must be provided if the input given is a stream, so we know ahead of time what the resource being updated is.

- `:atomic_update` (`t:map/0`) - A map of atomic updates to apply. See `Ash.Changeset.atomic_update/3` for more.

- `:stream_batch_size` (`t:integer/0`) - Batch size to use if provided a query and the query must be streamed

- `:authorize_query?` (`t:boolean/0`) - If a query is given, determines whether or not authorization is run on that query. The default value is `true`.

- `:filter` (`t:term/0`) - A filter to apply to records. This is also applied to a stream of inputs.

- `:strategy` - The strategy or strategies to enable. :stream is used in all cases if the data layer does not support atomics. Valid values are :atomic, :atomic_batches, :stream The default value is `[:atomic]`.

- `:allow_stream_with` - The 'worst' strategy allowed to be used to fetch records. See `Ash.stream!/2` docs for more. Valid values are :keyset, :offset, :full_read The default value is `:keyset`.

- `:stream_with` - The specific strategy to use to fetch records. See `Ash.stream!/2` docs for more. Valid values are :keyset, :offset, :full_read

- `:lock` (`t:term/0`) - A lock statement to add onto the query

- `:return_query?` (`t:boolean/0`) - If `true`, the query that was ultimately used is returned as a third tuple element.
  The query goes through many potential changes during a request, potentially adding
  authorization filters, or replacing relationships for other data layers with their
  corresponding ids. This option can be used to get the true query that was sent to
  the data layer. The default value is `false`.

- `:reuse_values?` (`t:boolean/0`) - Whether calculations are allowed to reuse values that have already been loaded, or must refetch them from the data layer. The default value is `false`.

- `:strict?` (`t:boolean/0`) - If set to true, only specified attributes will be loaded when passing
  a list of fields to fetch on a relationship, which allows for more
  optimized data-fetching.
  See `Ash.Query.load/2`. The default value is `false`.

- `:domain` (`Ash.Domain`) - The domain to use.

- `:timeout` (`t:timeout/0`) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer that implements the `Ash.Tracer` behaviour. See that module for more.

- `:action` (`t:term/0`) - The action to use, either an Action struct or the name of the action

- `:authorize?` - If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - A tenant to set on the query or changeset

- `:actor` (`t:term/0`) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

- `:return_notifications?` (`t:boolean/0`) - Use this if you're running ash actions in your own transaction and you want to manually handle sending notifications.
  If a transaction is ongoing, and this is false, notifications will be discarded, otherwise
  the return value is `{:ok, result, notifications}` (or `{:ok, notifications}`)
  To send notifications later, use `Ash.Notifier.notify(notifications)`. It sends any notifications
  that can be sent, and returns the rest. The default value is `false`.

- `:rollback_on_error?` (`t:boolean/0`) - Whether or not to rollback the transaction on error, if the resource is in a transaction.
  If the action has `transaction? false` this option has no effect. If an error is returned from the
  data layer and the resource is in a transaction, the transaction is always rolled back, regardless. The default value is `true`.

- `:notification_metadata` (`t:term/0`) - Metadata to be merged into the metadata field for all notifications sent from this operation. The default value is `%{}`.

- `:read_action` (`t:atom/0`) - The action to use when building the read query.

- `:assume_casted?` (`t:boolean/0`) - Whether or not to cast attributes and arguments as input. This is an optimization for cases where the input is already casted and/or not in need of casting The default value is `false`.

- `:load` (`t:term/0`) - A load statement to apply to records. Ignored if `return_records?` is not true.

- `:select` (list of `t:atom/0`) - A select statement to apply to records. Ignored if `return_records?` is not true.

- `:authorize_query_with` - If set to `:error`, instead of filtering unauthorized query results, unauthorized query results will raise an appropriate forbidden error. Uses `authorize_with` if not set. Valid values are :filter, :error

- `:authorize_changeset_with` - If set to `:error`, instead of filtering unauthorized changes, unauthorized changes will raise an appropriate forbidden error. Uses `authorize_with` if not set. Valid values are :filter, :error

- `:authorize_with` - If set to `:error`, instead of filtering unauthorized query results, unauthorized query results will raise an appropriate forbidden error. Valid values are :filter, :error The default value is `:filter`.

- `:context` (`t:map/0`) - Context to set on each changeset

- `:sorted?` (`t:boolean/0`) - Whether or not to sort results by their input position, in cases where `return_records?: true` was provided. The default value is `false`.

- `:return_records?` (`t:boolean/0`) - Whether or not to return all of the records that were inserted. Defaults to false to account for large inserts. The default value is `false`.

- `:return_errors?` (`t:boolean/0`) - Whether or not to return all of the errors that occur. Defaults to false to account for large inserts. The default value is `true`.

- `:batch_size` (`t:pos_integer/0`) - The number of records to include in each batch. Defaults to the `default_limit`
  or `max_page_size` of the action, or 100.

- `:return_stream?` (`t:boolean/0`) - If set to `true`, instead of an `Ash.BulkResult`, a mixed stream is returned.
  Potential elements:
  `{:notification, notification}` - if `return_notifications?` is set to `true`
  `{:ok, record}` - if `return_records?` is set to `true`
  `{:error, error}` - an error that occurred. May be changeset or an individual error. The default value is `false`.

- `:return_nothing?` (`t:boolean/0`) - Mutes warnings about returning nothing.
  Only relevant if `return_stream?` is set to `true` and all other
  `return_*?` options are set to `false`. The default value is `false`.

- `:stop_on_error?` (`t:boolean/0`) - If true, the first encountered error will stop the action and be returned. Otherwise, errors
  will be skipped. The default value is `true`.

- `:notify?` (`t:boolean/0`) - Whether or not to generate any notifications. If this is set to `true` then the data layer must return
  the results from each batch. This may be intensive for large bulk actions.
  Notifications will be automatically sent unless `return_notifications?` is set to `true`. The default value is `false`.

- `:transaction` - Whether or not to wrap the entire execution in a transaction, each batch, or not at all.
  Keep in mind:
  `before_transaction` and `after_transaction` hooks attached to changesets will have to be run
  _inside_ the transaction if you choose `transaction: :all`.
  Valid values are :all, :batch, false The default value is `:batch`.

- `:max_concurrency` (`t:non_neg_integer/0`) - If set to a value greater than 0, up to that many tasks will be started to run batches asynchronously The default value is `0`.

- `:skip_unknown_inputs` - A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

### Ash.bulk_update!/4 (function)

Updates all items in the provided enumerable or query with the provided input.

See `bulk_update/4` for more.

### Ash.calculate/3 (function)

Evaluates the calculation on the resource.

If a record is provided, its field values will be used to evaluate the calculation.

- `:args` (`t:map/0`) - Values for arguments referenced by the calculation. The default value is `%{}`.

- `:refs` (`t:map/0`) - Values for references used by the calculation. The default value is `%{}`.

- `:actor` (`t:term/0`) - The actor for handling `^actor/1` templates, supplied to calculation context.

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - The tenant, supplied to calculation context.

- `:authorize?` (`t:boolean/0`) - Whether or not the request is being authorized, provided to calculation context. The default value is `true`.

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer, provided to the calculation context.

- `:record` (`t:term/0`) - A record to use as the base of the calculation

- `:data_layer?` (`t:boolean/0`) - Set to `true` to require that the value be computed within the data layer. Only works for calculations that define an expression.

- `:reuse_values?` (`t:boolean/0`) - Set to `true` to reuse existing values on any provided record. Only necessary if providing a record as the basis for calculation. The default value is `false`.

- `:domain` (`Ash.Domain`) - The domain to use for the action

### Ash.calculate!/3 (function)

Evaluates the calculation on the resource or raises an error. See `calculate/3` for more.

### Ash.can/3 (function)

Returns whether or not the user can perform the action, or `:maybe`, returning any errors.

In cases with "runtime" checks (checks after the action), we may not be able to determine
an answer, and so the value `:maybe` will be returned from `can/2`. The `can?` function assumes that
`:maybe` means `true`. Keep in mind, this is just for doing things like "can they do this" in a UI,
so assuming `:maybe` is `true` is fine. The actual action invocation will be properly checked regardless.
If you have runtime checks, you may need to use `can` instead of `can?`, or configure what `:maybe` means.

### Accepted inputs - Ash.can/3 (function)

You can pass many different inputs as the subject to `can/3`.

```elixir
# Can this user run this query.
Ash.Query.t()

# Can this user run this changeset.
Ash.Changeset.t()

# Can this user run this action.
Ash.ActionInput.t()

# Can this user run this action.
{Ash.Resource.t(), :action}

# Can this user run this action.
{Ash.Resource.t(), %Action{}}

# Can this user run this action with this input.
{Ash.Resource.t(), :atom, %{...input}}

# Can this user run this action with this input.
{Ash.Resource.t(), %Action{}, %{...input}}
```

### Options - Ash.can/3 (function)

- `:maybe_is` (`t:term/0`) - If the actor _may_ be able to perform the action, what value should be returned. The default value is `:maybe`.

- `:filter_with` - If set to `:error`, the query will raise an error on a match. If set to `:filter` the query will filter out unauthorized access. Valid values are :filter, :error The default value is `:filter`.

- `:validate?` (`t:boolean/0`) - Whether or not to treat an invalid action as a non-allowed action. The default value is `false`.

- `:reuse_values?` (`t:boolean/0`) - Whether or not loaded data like aggregates, calculations and relationships should be checked in memory if possible, instead of querying. No effect if `pre_flight?` is `false`. The default value is `false`.

- `:pre_flight?` (`t:boolean/0`) - Whether or not this is a pre_flight check (which may perform optimized in-memory checks) or the final proper check. The default value is `true`.

- `:run_queries?` (`t:boolean/0`) - Whether or not to run queries. If set to `true`, `:maybe` will not be returned. The default value is `true`.

- `:data` - The record or records specifically attempting to be acted upon.

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - The tenant to use for authorization

- `:alter_source?` (`t:boolean/0`) - If set to `true`, the source being authorized is returned so it can be run. The default value is `false`.

- `:base_query` (`t:term/0`) - A base query on which to apply an generated filters

- `:no_check?` (`t:boolean/0`) - Whether or not authorization must pass at the strict/filter step, or if post-checks are allowed to be run The default value is `false`.

- `:on_must_pass_strict_check` (`t:term/0`) - Override the value returned when `no_check?` is `true` but a check must be run.

- `:atomic_changeset` (`t:term/0`) - A base query on which to apply an generated filters

- `:return_forbidden_error?` (`t:boolean/0`) - Whether or not to return a forbidden error in cases of not being authorized. The default value is `false`.

### Ash.can?/3 (function)

Returns whether or not the user can perform the action, or raises on errors.

Calls `can/3` with a `maybe_is: true`. See `can/3` for more info.

### Options - Ash.can?/3 (function)

- `:maybe_is` (`t:term/0`) - If the actor _may_ be able to perform the action, what value should be returned. The default value is `true`.

- `:filter_with` - If set to `:error`, the query will raise an error on a match. If set to `:filter` the query will filter out unauthorized access. Valid values are :filter, :error The default value is `:filter`.

- `:validate?` (`t:boolean/0`) - Whether or not to treat an invalid action as a non-allowed action. The default value is `false`.

- `:reuse_values?` (`t:boolean/0`) - Whether or not loaded data like aggregates, calculations and relationships should be checked in memory if possible, instead of querying. No effect if `pre_flight?` is `false`. The default value is `false`.

- `:pre_flight?` (`t:boolean/0`) - Whether or not this is a pre_flight check (which may perform optimized in-memory checks) or the final proper check. The default value is `true`.

- `:run_queries?` (`t:boolean/0`) - Whether or not to run queries. If set to `true`, `:maybe` will not be returned. The default value is `true`.

- `:data` - The record or records specifically attempting to be acted upon.

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - The tenant to use for authorization

- `:alter_source?` (`t:boolean/0`) - If set to `true`, the source being authorized is returned so it can be run. The default value is `false`.

- `:base_query` (`t:term/0`) - A base query on which to apply an generated filters

- `:no_check?` (`t:boolean/0`) - Whether or not authorization must pass at the strict/filter step, or if post-checks are allowed to be run The default value is `false`.

- `:on_must_pass_strict_check` (`t:term/0`) - Override the value returned when `no_check?` is `true` but a check must be run.

- `:atomic_changeset` (`t:term/0`) - A base query on which to apply an generated filters

- `:return_forbidden_error?` (`t:boolean/0`) - Whether or not to return a forbidden error in cases of not being authorized. The default value is `false`.

### Ash.context_to_opts/2 (function)

See Ash.Context.to_opts/2 .

### Ash.count/2 (function)

Fetches the count of results that would be returned from a given query.

### Ash.count!/2 (function)

Fetches the count of results that would be returned from a given query, or raises an error.

### Ash.create/3 (function)

Create a record.

- `:upsert?` (`t:boolean/0`) - If a conflict is found based on the primary key, the record is updated in the database (requires upsert support) The default value is `false`.

- `:return_skipped_upsert?` (`t:boolean/0`) - If `true`, and a record was _not_ upserted because its filter prevented the upsert, the original record (which was _not_ upserted) will be returned. The default value is `false`.

- `:upsert_identity` (`t:atom/0`) - The identity to use when detecting conflicts for `upsert?`, e.g. `upsert_identity: :full_name`. By default, the primary key is used. Has no effect if `upsert?: true` is not provided

- `:upsert_fields` - The fields to upsert. If not set, the action's upsert_fields is used, and if that is not set, then any fields not being set to defaults are written.

- `:upsert_condition` (`t:term/0`) - An expression to check if the record should be updated when there's a conflict.

- `:domain` (`Ash.Domain`) - The domain to use.

- `:timeout` (`t:timeout/0`) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer that implements the `Ash.Tracer` behaviour. See that module for more.

- `:action` (`t:term/0`) - The action to use, either an Action struct or the name of the action

- `:authorize?` - If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

- `:context` (`t:map/0`) - Context to set on the query, changeset, or input

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - A tenant to set on the query or changeset

- `:actor` (`t:term/0`) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

- `:return_notifications?` (`t:boolean/0`) - Use this if you're running ash actions in your own transaction and you want to manually handle sending notifications.
  If a transaction is ongoing, and this is false, notifications will be discarded, otherwise
  the return value is `{:ok, result, notifications}` (or `{:ok, notifications}`)
  To send notifications later, use `Ash.Notifier.notify(notifications)`. It sends any notifications
  that can be sent, and returns the rest. The default value is `false`.

- `:rollback_on_error?` (`t:boolean/0`) - Whether or not to rollback the transaction on error, if the resource is in a transaction.
  If the action has `transaction? false` this option has no effect. If an error is returned from the
  data layer and the resource is in a transaction, the transaction is always rolled back, regardless. The default value is `true`.

- `:notification_metadata` (`t:term/0`) - Metadata to be merged into the metadata field for all notifications sent from this operation. The default value is `%{}`.

- `:skip_unknown_inputs` - A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

- `:load` (`t:term/0`) - A load statement to add onto the changeset

### Ash.create!/3 (function)

Create a record or raises an error. See `create/2` for more information.

### Ash.destroy/2 (function)

Destroy a record.

- `:return_destroyed?` (`t:boolean/0`) - If true, the destroyed record is included in the return result, e.g `{:ok, destroyed}` or `{:ok, destroyed, notifications}` The default value is `false`.

- `:domain` (`Ash.Domain`) - The domain to use.

- `:timeout` (`t:timeout/0`) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer that implements the `Ash.Tracer` behaviour. See that module for more.

- `:action` (`t:term/0`) - The action to use, either an Action struct or the name of the action

- `:authorize?` - If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

- `:context` (`t:map/0`) - Context to set on the query, changeset, or input

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - A tenant to set on the query or changeset

- `:actor` (`t:term/0`) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

- `:return_notifications?` (`t:boolean/0`) - Use this if you're running ash actions in your own transaction and you want to manually handle sending notifications.
  If a transaction is ongoing, and this is false, notifications will be discarded, otherwise
  the return value is `{:ok, result, notifications}` (or `{:ok, notifications}`)
  To send notifications later, use `Ash.Notifier.notify(notifications)`. It sends any notifications
  that can be sent, and returns the rest. The default value is `false`.

- `:rollback_on_error?` (`t:boolean/0`) - Whether or not to rollback the transaction on error, if the resource is in a transaction.
  If the action has `transaction? false` this option has no effect. If an error is returned from the
  data layer and the resource is in a transaction, the transaction is always rolled back, regardless. The default value is `true`.

- `:notification_metadata` (`t:term/0`) - Metadata to be merged into the metadata field for all notifications sent from this operation. The default value is `%{}`.

- `:skip_unknown_inputs` - A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

- `:load` (`t:term/0`) - A load statement to add onto the changeset

### Ash.destroy!/2 (function)

Destroy a record. See `destroy/2` for more information.

### Ash.exists/2 (function)

Returns whether or not the query would return any results.

### Ash.exists?/2 (function)

Returns whether or not the query would return any results, or raises an error.

### Ash.first/3 (function)

Fetches the first value for a given field, or raises an error.

### Ash.first!/3 (function)

Fetches the first value for a given field.

### Ash.get/3 (function)

Get a record by an identifier.

For a resource with a composite primary key, pass a keyword list or map, e.g
`Ash.get(MyResource, %{first_key: 1, second_key: 2})`

Additionally, a keyword list or map of keys matching an identity can be provided.

- `:error?` (`t:boolean/0`) - Whether or not an error should be returned or raised when the record is not found. If set to false, `nil` will be returned. The default value is `true`.

- `:load` (`t:term/0`) - Fields or relationships to load in the query. See `Ash.Query.load/2`

- `:lock` (`t:term/0`) - A lock statement to add onto the query

- `:reuse_values?` (`t:boolean/0`) - Whether calculations are allowed to reuse values that have already been loaded, or must refetch them from the data layer. The default value is `false`.

- `:strict?` (`t:boolean/0`) - If set to true, only specified attributes will be loaded when passing
  a list of fields to fetch on a relationship, which allows for more
  optimized data-fetching.
  See `Ash.Query.load/2`. The default value is `false`.

- `:authorize_with` - If set to `:error`, instead of applying authorization filters as a filter, any records not matching the authorization filter will cause an error to be returned. Valid values are :filter, :error The default value is `:filter`.

- `:domain` (`Ash.Domain`) - The domain to use.

- `:timeout` (`t:timeout/0`) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer that implements the `Ash.Tracer` behaviour. See that module for more.

- `:action` (`t:term/0`) - The action to use, either an Action struct or the name of the action

- `:authorize?` - If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

- `:context` (`t:map/0`) - Context to set on the query, changeset, or input

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - A tenant to set on the query or changeset

- `:actor` (`t:term/0`) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

### Ash.get!/3 (function)

Get a record by an identifier, or raises an error. See `get/3` for more.

### Ash.list/3 (function)

Fetches a list of all values of a given field.

### Ash.list!/3 (function)

Fetches a list of all values of a given field or raises an error.

### Ash.load/3 (function)

Load fields or relationships on already fetched records.

Accepts a list of non-loaded fields and loads them on the provided records or a query, in
which case the loaded fields of the query are used. Relationship loads can be nested, for
example: `Ash.load(record, [posts: [:comments]])`.

- `:lazy?` (`t:boolean/0`) - If set to true, values will only be loaded if the related value isn't currently loaded. The default value is `false`.

- `:reuse_values?` (`t:boolean/0`) - Whether calculations are allowed to reuse values that have already been loaded, or must refetch them from the data layer. The default value is `false`.

- `:strict?` (`t:boolean/0`) - If set to true, only specified attributes will be loaded when passing
  a list of fields to fetch on a relationship, which allows for more
  optimized data-fetching.
  See `Ash.Query.load/2`. The default value is `false`.

- `:domain` (`Ash.Domain`) - The domain to use.

- `:timeout` (`t:timeout/0`) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer that implements the `Ash.Tracer` behaviour. See that module for more.

- `:action` (`t:term/0`) - The action to use, either an Action struct or the name of the action

- `:authorize?` - If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

- `:context` (`t:map/0`) - Context to set on the query, changeset, or input

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - A tenant to set on the query or changeset

- `:actor` (`t:term/0`) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

### Ash.load!/3 (function)

Load fields or relationships on already fetched records. See `load/3` for more information.

### Ash.load_statement/0 (type)

### Ash.max/3 (function)

Fetches the greatest of all values of a given field.

### Ash.max!/3 (function)

Fetches the greatest of all values of a given field or raises an error.

### Ash.min/3 (function)

Fetches the least of all values of a given field.

### Ash.min!/3 (function)

Fetches the least of all values of a given field or raises an error.

### Ash.page/2 (function)

Fetch a page relative to the provided page.

### Ash.page!/2 (function)

Fetch a page relative to the provided page or raises an error

### Ash.page_request/0 (type)

### Ash.read/2 (function)

Runs an `Ash.Query`.

For more information on building a query, see `Ash.Query`.

- `:page` - Pagination options, see `Ash.read/2` for more.

- `:load` (`t:term/0`) - A load statement to add onto the query

- `:max_concurrency` (`t:non_neg_integer/0`) - The maximum number of processes allowed to be started for parallel loading of relationships and calculations. Defaults to `System.schedulers_online() * 2`

- `:lock` (`t:term/0`) - A lock statement to add onto the query

- `:return_query?` (`t:boolean/0`) - If `true`, the query that was ultimately used is returned as a third tuple element.
  The query goes through many potential changes during a request, potentially adding
  authorization filters, or replacing relationships for other data layers with their
  corresponding ids. This option can be used to get the true query that was sent to
  the data layer. The default value is `false`.

- `:skip_unknown_inputs` - A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

- `:reuse_values?` (`t:boolean/0`) - Whether calculations are allowed to reuse values that have already been loaded, or must refetch them from the data layer. The default value is `false`.

- `:strict?` (`t:boolean/0`) - If set to true, only specified attributes will be loaded when passing
  a list of fields to fetch on a relationship, which allows for more
  optimized data-fetching.
  See `Ash.Query.load/2`. The default value is `false`.

- `:authorize_with` - If set to `:error`, instead of applying authorization filters as a filter, any records not matching the authorization filter will cause an error to be returned. Valid values are :filter, :error The default value is `:filter`.

- `:domain` (`Ash.Domain`) - The domain to use.

- `:timeout` (`t:timeout/0`) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer that implements the `Ash.Tracer` behaviour. See that module for more.

- `:action` (`t:term/0`) - The action to use, either an Action struct or the name of the action

- `:authorize?` - If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

- `:context` (`t:map/0`) - Context to set on the query, changeset, or input

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - A tenant to set on the query or changeset

- `:actor` (`t:term/0`) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

### Pagination - Ash.read/2 (function)

#### Limit/offset pagination

- `:offset` (`t:non_neg_integer/0`) - The number of records to skip from the beginning of the query

- `:limit` (`t:pos_integer/0`) - The number of records to include in the page

- `:filter` (`t:term/0`) - A filter to apply for pagination purposes, that should not be considered in the full count.
  This is used by the liveview paginator to only fetch the records that were _already_ on the
  page when refreshing data, to avoid pages jittering.

- `:count` (`t:boolean/0`) - Whether or not to return the page with a full count of all records

#### Keyset pagination

- `:before` (`t:String.t/0`) - Get records that appear before the provided keyset (mutually exclusive with `after`)

- `:after` (`t:String.t/0`) - Get records that appear after the provided keyset (mutually exclusive with `before`)

- `:limit` (`t:pos_integer/0`) - How many records to include in the page

- `:filter` (`t:term/0`) - See the `filter` option for offset pagination, this behaves the same.

- `:count` (`t:boolean/0`) - Whether or not to return the page with a full count of all records

### Ash.read!/2 (function)

Run an `Ash.Query`. See `read/2` for more.

### Ash.read_first/2 (function)

Runs a query on a resource, returning a first result, nil, or an error.

Query is automatically limited to only return one result, unlike `read_one/3`

### Options - Ash.read_first/2 (function)

- `:not_found_error?` (`t:boolean/0`) - Whether or not to return an `Ash.Error.Query.NotFound` if no record is found. The default value is `false`.

- `:page` - Pagination options, see `Ash.read/2` for more.

- `:load` (`t:term/0`) - A load statement to add onto the query

- `:max_concurrency` (`t:non_neg_integer/0`) - The maximum number of processes allowed to be started for parallel loading of relationships and calculations. Defaults to `System.schedulers_online() * 2`

- `:lock` (`t:term/0`) - A lock statement to add onto the query

- `:return_query?` (`t:boolean/0`) - If `true`, the query that was ultimately used is returned as a third tuple element.
  The query goes through many potential changes during a request, potentially adding
  authorization filters, or replacing relationships for other data layers with their
  corresponding ids. This option can be used to get the true query that was sent to
  the data layer. The default value is `false`.

- `:skip_unknown_inputs` - A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

- `:reuse_values?` (`t:boolean/0`) - Whether calculations are allowed to reuse values that have already been loaded, or must refetch them from the data layer. The default value is `false`.

- `:strict?` (`t:boolean/0`) - If set to true, only specified attributes will be loaded when passing
  a list of fields to fetch on a relationship, which allows for more
  optimized data-fetching.
  See `Ash.Query.load/2`. The default value is `false`.

- `:authorize_with` - If set to `:error`, instead of applying authorization filters as a filter, any records not matching the authorization filter will cause an error to be returned. Valid values are :filter, :error The default value is `:filter`.

- `:domain` (`Ash.Domain`) - The domain to use.

- `:timeout` (`t:timeout/0`) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer that implements the `Ash.Tracer` behaviour. See that module for more.

- `:action` (`t:term/0`) - The action to use, either an Action struct or the name of the action

- `:authorize?` - If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

- `:context` (`t:map/0`) - Context to set on the query, changeset, or input

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - A tenant to set on the query or changeset

- `:actor` (`t:term/0`) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

### Ash.read_first!/2 (function)

Runs an Ash query, returning the first result or nil, or raising an error. See `read_first/2` for more.

### Ash.read_one/2 (function)

Runs a query on a resource, returning a single result, nil, or an error.

If more than one result would be returned, an error is returned instead.

### Options - Ash.read_one/2 (function)

- `:not_found_error?` (`t:boolean/0`) - Whether or not to return an `Ash.Error.Query.NotFound` if no record is found. The default value is `false`.

- `:page` - Pagination options, see `Ash.read/2` for more.

- `:load` (`t:term/0`) - A load statement to add onto the query

- `:max_concurrency` (`t:non_neg_integer/0`) - The maximum number of processes allowed to be started for parallel loading of relationships and calculations. Defaults to `System.schedulers_online() * 2`

- `:lock` (`t:term/0`) - A lock statement to add onto the query

- `:return_query?` (`t:boolean/0`) - If `true`, the query that was ultimately used is returned as a third tuple element.
  The query goes through many potential changes during a request, potentially adding
  authorization filters, or replacing relationships for other data layers with their
  corresponding ids. This option can be used to get the true query that was sent to
  the data layer. The default value is `false`.

- `:skip_unknown_inputs` - A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

- `:reuse_values?` (`t:boolean/0`) - Whether calculations are allowed to reuse values that have already been loaded, or must refetch them from the data layer. The default value is `false`.

- `:strict?` (`t:boolean/0`) - If set to true, only specified attributes will be loaded when passing
  a list of fields to fetch on a relationship, which allows for more
  optimized data-fetching.
  See `Ash.Query.load/2`. The default value is `false`.

- `:authorize_with` - If set to `:error`, instead of applying authorization filters as a filter, any records not matching the authorization filter will cause an error to be returned. Valid values are :filter, :error The default value is `:filter`.

- `:domain` (`Ash.Domain`) - The domain to use.

- `:timeout` (`t:timeout/0`) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer that implements the `Ash.Tracer` behaviour. See that module for more.

- `:action` (`t:term/0`) - The action to use, either an Action struct or the name of the action

- `:authorize?` - If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

- `:context` (`t:map/0`) - Context to set on the query, changeset, or input

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - A tenant to set on the query or changeset

- `:actor` (`t:term/0`) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

### Ash.read_one!/2 (function)

Runs an ash query, returning a single result or raise an error. See `read_one/2` for more.

### Ash.record_or_records/0 (type)

### Ash.record_with_args/0 (type)

### Ash.reload/2 (function)

Refetches a record by primary key. See `get/2` for more.

### Ash.reload!/2 (function)

Refetches a record by primary key or raises an error. See `reload/2` for more.

### Ash.resource_with_args/0 (type)

### Ash.run_action/2 (function)

Runs a generic action.

Options:

- `:actor` (`t:term/0`) - The actor for handling `^actor/1` templates, supplied to calculation context.

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - The tenant, supplied to calculation context.

- `:authorize?` (`t:boolean/0`) - Whether or not the request should be authorized.

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer, provided to the calculation context.

- `:domain` (`Ash.Domain`) - The domain to use for the action

- `:context` (`t:map/0`) - Context to set on the action input

- `:skip_unknown_inputs` - A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

### Ash.run_action!/2 (function)

Runs a generic action or raises an error. See `run_action/2` for more

### Ash.stream!/2 (function)

Streams the results of a query.

### Strategies - Ash.stream!/2 (function)

There are three strategies supported, and the best one available is always chosen. They are,
in order from best to worst:

- `:keyset`
- `:offset`
- `:full_read`

By default, only `:keyset` is supported. If you want to allow worse strategies to be used, pass
the worst one you wish to allow as the `allow_stream_with` option, i.e `allow_stream_with: :full_read`.
If you wish to specify a specific strategy to use, pass `stream_with: :strategy_name`.

### Keyset - Ash.stream!/2 (function)

This utilizes keyset pagination to accomplish this stream. The action must support keyset pagination.
This is the most efficient way to stream a query, because it works by using filters which can benefit
from indexes in the data layer.

### Offset - Ash.stream!/2 (function)

This utilizes offset/limit to accomplish this stream. If the action supports offset pagination, that will
be used. Otherwise, if the data layer supports limit/offset, then explicit limits/offsets will be used.
This is a much less efficient way of streaming a resource than `keyset`. To use limit/offset to reliably
stream, a sort must always be applied, and limit/offset in the data layer will generally require sorting
the entire table to figure out what is in each batch.

### Full Read - Ash.stream!/2 (function)

This reads the entire table into memory with no limit. This is, generally speaking, the least efficient.

### Options - Ash.stream!/2 (function)

- `:batch_size` (`t:integer/0`) - How many records to request in each query run. Defaults to the pagination limits on the resource, or 250.

- `:allow_stream_with` - The 'worst' strategy allowed to be used to fetch records. See `Ash.stream!/2` docs for more. Valid values are :keyset, :offset, :full_read The default value is `:keyset`.

- `:stream_with` - The specific strategy to use to fetch records. See `Ash.stream!/2` docs for more. Valid values are :keyset, :offset, :full_read

- `:load` (`t:term/0`) - A load statement to add onto the query

- `:max_concurrency` (`t:non_neg_integer/0`) - The maximum number of processes allowed to be started for parallel loading of relationships and calculations. Defaults to `System.schedulers_online() * 2`

- `:lock` (`t:term/0`) - A lock statement to add onto the query

- `:return_query?` (`t:boolean/0`) - If `true`, the query that was ultimately used is returned as a third tuple element.
  The query goes through many potential changes during a request, potentially adding
  authorization filters, or replacing relationships for other data layers with their
  corresponding ids. This option can be used to get the true query that was sent to
  the data layer. The default value is `false`.

- `:skip_unknown_inputs` - A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

- `:reuse_values?` (`t:boolean/0`) - Whether calculations are allowed to reuse values that have already been loaded, or must refetch them from the data layer. The default value is `false`.

- `:strict?` (`t:boolean/0`) - If set to true, only specified attributes will be loaded when passing
  a list of fields to fetch on a relationship, which allows for more
  optimized data-fetching.
  See `Ash.Query.load/2`. The default value is `false`.

- `:authorize_with` - If set to `:error`, instead of applying authorization filters as a filter, any records not matching the authorization filter will cause an error to be returned. Valid values are :filter, :error The default value is `:filter`.

- `:domain` (`Ash.Domain`) - The domain to use.

- `:timeout` (`t:timeout/0`) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer that implements the `Ash.Tracer` behaviour. See that module for more.

- `:action` (`t:term/0`) - The action to use, either an Action struct or the name of the action

- `:authorize?` - If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

- `:context` (`t:map/0`) - Context to set on the query, changeset, or input

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - A tenant to set on the query or changeset

- `:actor` (`t:term/0`) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

### Ash.sum/3 (function)

Fetches the sum of a given field.

### Ash.sum!/3 (function)

Fetches the sum of a given field or raises an error.

### Ash.transaction/3 (function)

Wraps the execution of the function in a transaction with the resource's data_layer.
Collects notifications during the function's execution and sends them if the transaction was successful.

- `:timeout` (`t:timeout/0`) - The time in milliseconds (as an integer) to wait for the transaction to finish or `:infinity` to wait indefinitely.
  If not specified then default behaviour is adapter specific - for `Ecto`-based data layers it will be `15_000`.

- `:return_notifications?` (`t:boolean/0`) - Use this if you want to manually handle sending notifications.
  If true the returned tuple will contain notifications list as the last element.
  To send notifications use `Ash.Notifier.notify(notifications)`. It sends any notifications that can be sent, and returns the rest. The default value is `false`.

### Ash.update/3 (function)

Update a record.

- `:params` (`t:map/0`) - Parameters to supply, ignored if the input is a changeset, only used when an identifier is given.

- `:atomic_upgrade?` (`t:boolean/0`) - If true the action will be done atomically if it can (and is configured to do so), ignoring the in memory transformations and validations. You should not generally need to disable this. The default value is `true`.

- `:domain` (`Ash.Domain`) - The domain to use.

- `:timeout` (`t:timeout/0`) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer that implements the `Ash.Tracer` behaviour. See that module for more.

- `:action` (`t:term/0`) - The action to use, either an Action struct or the name of the action

- `:authorize?` - If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

- `:context` (`t:map/0`) - Context to set on the query, changeset, or input

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - A tenant to set on the query or changeset

- `:actor` (`t:term/0`) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

- `:return_notifications?` (`t:boolean/0`) - Use this if you're running ash actions in your own transaction and you want to manually handle sending notifications.
  If a transaction is ongoing, and this is false, notifications will be discarded, otherwise
  the return value is `{:ok, result, notifications}` (or `{:ok, notifications}`)
  To send notifications later, use `Ash.Notifier.notify(notifications)`. It sends any notifications
  that can be sent, and returns the rest. The default value is `false`.

- `:rollback_on_error?` (`t:boolean/0`) - Whether or not to rollback the transaction on error, if the resource is in a transaction.
  If the action has `transaction? false` this option has no effect. If an error is returned from the
  data layer and the resource is in a transaction, the transaction is always rolled back, regardless. The default value is `true`.

- `:notification_metadata` (`t:term/0`) - Metadata to be merged into the metadata field for all notifications sent from this operation. The default value is `%{}`.

- `:skip_unknown_inputs` - A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

- `:load` (`t:term/0`) - A load statement to add onto the changeset

### Ash.update!/3 (function)

Update a record. See `update/2` for more information.

### Ash.ActionInput (module)

Input for a custom action

Much like an `Ash.Query` and `Ash.Changeset` are used to provide inputs into
CRUD actions, this struct provides the inputs required to execute a generic
action.

### Ash.ActionInput.add_error/3 (function)

Add an error to the errors list and mark the action input as invalid.

See `Ash.Error.to_ash_error/3` for more on supported values for `error`

### Ash.ActionInput.fetch_argument/2 (function)

Fetches the value of an argument provided to the input or `:error`.

### Examples - Ash.ActionInput.fetch_argument/2 (function)

iex> Post
...> |> Ash.ActionInput.for_action(:example, %{arg: "banana"})
...> |> Ash.ActionInput.fetch_argument(:arg)
{:ok, "banana"}

    iex> Post
    ...> |> Ash.ActionInput.for_action(:example, %{})
    ...> |> Ash.ActionInput.fetch_argument(:banana)
    :error

### Ash.ActionInput.for_action/4 (function)

Creates a new input for a generic action

### Options - Ash.ActionInput.for_action/4 (function)

- `:domain` (`Ash.Domain`) - The domain to use for the action. The resource's domain is used by default.

- `:context` (`t:map/0`) - Context to set on the action input. The default value is `%{}`.

- `:authorize?` - Whether or not to run authorization on the action. Default behavior of this option is controlled by the domain.

- `:tenant` (`t:term/0`) - The tenant to use for the action.

- `:actor` (`t:term/0`) - The actor performing the action

- `:skip_unknown_inputs` - A list of unknown inputs to skip. Use `:*` to skip all unknown inputs.

- `:tracer` (`t:term/0`) - A tracer or list of tracers to trace action execution.

- `:private_arguments` (`t:map/0`) - A list of private arguments to be set before the action is invoked. The default value is `%{}`.

### Examples - Ash.ActionInput.for_action/4 (function)

iex> Post
...> |> Ash.ActionInput.for_action(:example, %{})
...> |> then(& &1.action.name)
:example

### Ash.ActionInput.get_argument/2 (function)

Gets the value of an argument provided to the input.

### Example - Ash.ActionInput.get_argument/2 (function)

iex> Post
...> |> Ash.ActionInput.for_action(:example, %{arg: "banana"})
...> |> Ash.ActionInput.get_argument(:arg)
"banana"

### Ash.ActionInput.new/2 (function)

Create a new action input from a resource.

### Examples - Ash.ActionInput.new/2 (function)

iex> Ash.ActionInput.new(Post)
%Ash.ActionInput{resource: Post}

    iex> Ash.ActionInput.new(Post, Domain)
    %Ash.ActionInput{resource: Post, domain: Domain}

### Ash.ActionInput.set_argument/3 (function)

Set an argument value

### Example - Ash.ActionInput.set_argument/3 (function)

iex> Post
...> |> Ash.ActionInput.for_action(:example, %{})
...> |> Ash.ActionInput.set_argument(:arg, "banana")
...> |> Ash.ActionInput.get_argument(:arg)
"banana"

### Ash.ActionInput.set_context/2 (function)

Deep merges the provided map into the input context that can be used later

Do not use the `private` key in your custom context, as that is reserved for
internal use.

### Example - Ash.ActionInput.set_context/2 (function)

iex> Post
...> |> Ash.ActionInput.new()
...> |> Ash.ActionInput.set_context(%{favourite_fruit: :banana})
...> |> then(& &1.context.favourite_fruit)
:banana

### Ash.ActionInput.set_private_argument/3 (function)

Sets a private argument value

### Example - Ash.ActionInput.set_private_argument/3 (function)

iex> Post
...> |> Ash.ActionInput.for_action(:example, %{})
...> |> Ash.ActionInput.set_private_argument(:private_arg, "banana")
...> |> Ash.ActionInput.get_argument(:private_arg)
"banana"

### Ash.ActionInput.set_tenant/2 (function)

Set the tenant to use when calling the action.

### Example - Ash.ActionInput.set_tenant/2 (function)

iex> Post
...> |> Ash.ActionInput.new()
...> |> Ash.ActionInput.set_tenant("banana")
...> |> then(& &1.tenant)
"banana"

### Ash.ActionInput.t/0 (type)

### Ash.BulkResult (module)

The return value for bulk actions.

### Ash.BulkResult.t/0 (type)

### Ash.Changeset (module)

Changesets are used to create and update data in Ash.

Create a changeset with `new/1` or `new/2`, and alter the attributes
and relationships using the functions provided in this module. Nothing in this module
actually incurs changes in a data layer. To commit a changeset, see `Ash.create/2`
and `Ash.update/2`.

# Changeset lifecycle

### Action Lifecycle - Ash.Changeset (module)

The following example illustrates the hook lifecycle of a changeset.

```elixir
defmodule AshChangesetLifeCycleExample do
  def change(changeset, _, _) do
    changeset
    # execute code both before and after the transaction
    |> Ash.Changeset.around_transaction(fn changeset, callback ->
      callback.(changeset)
    end)
    # execute code before the transaction is started. Use for things like external calls
    |> Ash.Changeset.before_transaction(fn changeset -> changeset end)
    # execute code in the transaction, before and after the data layer is called
    |> Ash.Changeset.around_action(fn changeset, callback ->
      callback.(changeset)
    end)
    # execute code in the transaction, before the data layer is called
    |> Ash.Changeset.before_action(fn changeset -> changeset end)
    # execute code in the transaction, after the data layer is called, only if the action is successful
    |> Ash.Changeset.after_action(fn changeset, result -> {:ok, result} end)
    # execute code after the transaction, both in success and error cases
    |> Ash.Changeset.after_transaction(fn changeset, success_or_error_result -> success_or_error_result end
  end
end
```

### Ash.Changeset.accessing/3 (function)

Returns a list of attributes, aggregates, relationships, and calculations that are being loaded

Provide a list of field types to narrow down the returned results.

### Ash.Changeset.add_error/3 (function)

Add an error to the errors list and mark the changeset as invalid.

See `Ash.Error.to_ash_error/3` for more on supported values for `error`

### Ash.Changeset.after_action/3 (function)

Adds an after_action hook to the changeset.

Provide the option `prepend?: true` to place the hook before all
other hooks instead of after.

### Ash.Changeset.after_action_fun/0 (type)

### Ash.Changeset.after_transaction/3 (function)

Adds an after_transaction hook to the changeset. Cannot be called within other hooks.

`after_transaction` hooks differ from `after_action` hooks in that they are run
on success _and_ failure of the action or some previous hook.

Provide the option `prepend?: true` to place the hook before all
other hooks instead of after.

### Ash.Changeset.after_transaction_fun/0 (type)

### Ash.Changeset.apply_attributes/2 (function)

Returns the original data with attribute changes merged, if the changeset is valid.

Options:

- force? - applies current attributes even if the changeset is not valid

### Ash.Changeset.around_action/2 (function)

Adds an around_action hook to the changeset.

Your function will get the changeset, and a callback that must be called with a changeset (that may be modified).
The callback will return `{:ok, result, changeset, instructions}` or `{:error, error}`. You can modify these values, but the
return value must be one of those types. Instructions contains the notifications in its `notifications` key, i.e
`%{notifications: [%Ash.Resource.Notification{}, ...]}`.

The around_action calls happen first, and then (after they each resolve their callbacks) the `before_action`
hooks are called, followed by the action itself occurring at the data layer and then the `after_action` hooks being run.
Then, the code that appeared _after_ the callbacks were called is then run.

For example:

```elixir
changeset
|> Ash.Changeset.around_action(fn changeset, callback ->
  IO.puts("first around: before")
  result = callback.(changeset)
  IO.puts("first around: after")

  result
end)
|> Ash.Changeset.around_action(fn changeset, callback ->
  IO.puts("second around: before")
  result = callback.(changeset)
  IO.puts("second around: after")

  result
end)
|> Ash.Changeset.before_action(fn changeset ->
  IO.puts("first before")
  changeset
end)
|> Ash.Changeset.before_action(fn changeset ->
  IO.puts("second before")
  changeset
end)
|> Ash.Changeset.after_action(fn changeset, result ->
  IO.puts("first after")
  {:ok, result}
end)
|> Ash.Changeset.after_action(fn changeset, result ->
  IO.puts("second after")
  {:ok, result}
end)
```

This would print:

```
first around: before
second around: before
first before
second before
             <-- action happens here
first after
second after
second around: after <-- Notice that because of the callbacks, the after of the around hooks is reversed from the before
first around: after
```

Warning: using this without understanding how it works can cause big problems.
You _must_ call the callback function that is provided to your hook, and the return value must
contain the same structure that was given to you, i.e `{:ok, result_of_action, instructions}`.

You can almost always get the same effect by using `before_action`, setting some context on the changeset
and reading it out in an `after_action` hook.

### Ash.Changeset.around_action_callback/0 (type)

### Ash.Changeset.around_action_fun/0 (type)

### Ash.Changeset.around_action_result/0 (type)

### Ash.Changeset.around_transaction/2 (function)

Adds an around_transaction hook to the changeset.

Your function will get the changeset, and a callback that must be called with a changeset (that may be modified).
The callback will return `{:ok, result}` or `{:error, error}`. You can modify these values, but the return value
must be one of those types.

The around_transaction calls happen first, and then (after they each resolve their callbacks) the `before_transaction`
hooks are called, followed by the action hooks and then the `after_transaction` hooks being run.
Then, the code that appeared _after_ the callbacks were called is then run.

For example:

```elixir
changeset
|> Ash.Changeset.around_transaction(fn changeset, callback ->
  IO.puts("first around: before")
  result = callback.(changeset)
  IO.puts("first around: after")

  result
end)
|> Ash.Changeset.around_transaction(fn changeset, callback ->
  IO.puts("second around: before")
  result = callback.(changeset)
  IO.puts("second around: after")

  result
end)
|> Ash.Changeset.before_transaction(fn changeset ->
  IO.puts("first before")
  changeset
end)
|> Ash.Changeset.before_transaction(fn changeset ->
  IO.puts("second before")
  changeset
end)
|> Ash.Changeset.after_transaction(fn changeset, result ->
  IO.puts("first after")
  result
end)
|> Ash.Changeset.after_transaction(fn changeset, result ->
  IO.puts("second after")
  result
end)
```

This would print:

```
first around: before
second around: before
first before
second before
             <-- action hooks happens here
first after
second after
second around: after <-- Notice that because of the callbacks, the after of the around hooks is reversed from the before
first around: after
```

Warning: using this without understanding how it works can cause big problems.
You _must_ call the callback function that is provided to your hook, and the return value must
contain the same structure that was given to you, i.e `{:ok, result_of_action}`.

You can almost always get the same effect by using `before_transaction`, setting some context on the changeset
and reading it out in an `after_transaction` hook.

### Ash.Changeset.around_transaction_callback/0 (type)

### Ash.Changeset.around_transaction_fun/0 (type)

### Ash.Changeset.around_transaction_result/0 (type)

### Ash.Changeset.atomic_defaults/1 (function)

### Ash.Changeset.atomic_ref/2 (function)

Gets a reference to a field, or the current atomic update expression of that field.

### Ash.Changeset.atomic_update/2 (function)

Adds multiple atomic changes to the changeset

See `atomic_update/3` for more information.

### Ash.Changeset.atomic_update/3 (function)

Adds an atomic change to the changeset.

Atomic changes are applied by the data layer, and as such have guarantees that are not
given by changes that are based on looking at the previous value and updating it. Here
is an example of a change that is not safe to do concurrently:

```elixir
change fn changeset, _ ->
  Ash.Changeset.change_attribute(changeset, :score, changeset.data.score + 1)
end
```

If two processes run this concurrently, they will both read the same value of `score`, and
set the new score to the same value. This means that one of the increments will be lost.
If you were to instead do this using `atomic_update`, you would get the correct result:

```elixir
Ash.Changeset.atomic_update(changeset, :score, expr(score + 1))
```

There are drawbacks/things to consider, however. The first is that atomic update results
are not known until after the action is run. The following functional validation would not
be able to enforce the score being less than 10, because the atomic happens after the validation.

```elixir
validate fn changeset, _ ->
  if Ash.Changeset.get_attribute(changeset, :score) < 10 do
    :ok
  else
    {:error, field: :score, message: "must be less than 10"}
  end
end
```

If you want to use atomic updates, it is suggested to write module-based validations & changes,
and implement the appropriate atomic callbacks on those modules. All builtin validations and changes
implement these callbacks in addition to the standard callbacks. Validations will only be run atomically
when the entire action is being run atomically or if one of the relevant fields is being updated atomically.

### Ash.Changeset.attribute_present?/2 (function)

Checks if an attribute is not nil, either in the original data, or that it is not being changed to a `nil` value if it is changing.

This also accounts for the `accessing_from` context that is set when using `manage_relationship`, so it is aware that a particular value
_will_ be set by `manage_relationship` even if it isn't currently being set.

### Ash.Changeset.before_action/3 (function)

Adds a before_action hook to the changeset.

Provide the option `prepend?: true` to place the hook before all
other hooks instead of after.

### Ash.Changeset.before_action_fun/0 (type)

### Ash.Changeset.before_transaction/3 (function)

Adds a before_transaction hook to the changeset.

Provide the option `prepend?: true` to place the hook before all
other hooks instead of after.

### Ash.Changeset.before_transaction_fun/0 (type)

### Ash.Changeset.change_attribute/3 (function)

Adds a change to the changeset, unless the value matches the existing value.

### Ash.Changeset.change_attributes/2 (function)

Calls `change_attribute/3` for each key/value pair provided.

### Ash.Changeset.change_default_attribute/3 (function)

The same as `change_attribute`, but annotates that the attribute is currently holding a default value.

This information can be used in changes to see if a value was explicitly set or if it was set by being the default.
Additionally, this is used in `upsert` actions to not overwrite existing values with the default.

### Ash.Changeset.change_new_attribute/3 (function)

Change an attribute only if is not currently being changed

### Ash.Changeset.change_new_attribute_lazy/3 (function)

Change an attribute if is not currently being changed, by calling the provided function.

Use this if you want to only perform some expensive calculation for an attribute value
only if there isn't already a change for that attribute.

### Ash.Changeset.changing_attribute?/2 (function)

Returns true if an attribute exists in the changes

### Ash.Changeset.changing_attributes?/1 (function)

Returns true if any attributes on the resource are being changed.

### Ash.Changeset.changing_relationship?/2 (function)

Returns true if a relationship exists in the changes

### Ash.Changeset.clear_change/2 (function)

Clears an attribute or relationship change off of the changeset.

### Ash.Changeset.delete_argument/2 (function)

Remove an argument from the changeset

### Ash.Changeset.deselect/2 (function)

Ensure the the specified attributes are `nil` in the changeset results.

### Ash.Changeset.ensure_selected/2 (function)

Ensures that the given attributes are selected.

The first call to `select/2` will _limit_ the fields to only the provided fields.
Use `ensure_selected/2` to say "select this field (or these fields) without deselecting anything else".

See `select/2` for more.

### Ash.Changeset.error_info/0 (type)

### Ash.Changeset.expand_upsert_fields/2 (function)

Turns the special case {:replace, fields}, :replace_all and {:replace_all_except, fields} upsert_fields
options into a list of fields

### Ash.Changeset.fetch_argument/2 (function)

Fetches the value of an argument provided to the changeset or `:error`.

### Ash.Changeset.fetch_argument_or_change/2 (function)

Gets the value of an argument provided to the changeset, falling back to `Ash.Changeset.fetch_change/2` if nothing was provided.

### Ash.Changeset.fetch_change/2 (function)

Gets the new value for an attribute, or `:error` if it is not being changed.

### Ash.Changeset.filter/2 (function)

Adds a filter for a record being updated or destroyed.

Used by optimistic locking. See `Ash.Resource.Change.Builtins.optimistic_lock/1` for more.

### Ash.Changeset.for_action/4 (function)

Constructs a changeset for a given action, and validates it.

Calls `for_create/4`, `for_update/4` or `for_destroy/4` based on the type of action passed in.

See those functions for more explanation.

### Ash.Changeset.for_create/4 (function)

Constructs a changeset for a given create action, and validates it.

Anything that is modified prior to `for_create/4` is validated against the rules of the action, while _anything after it is not_.
This runs any `change`s contained on your action. To have your logic execute _only_ during the action, you can use `after_action/2`
or `before_action/2`.

Multitenancy is _not_ validated until an action is called. This allows you to avoid specifying a tenant until just before calling
the domain action.

### Params - Ash.Changeset.for_create/4 (function)

`params` may be attributes, relationships, or arguments. You can safely pass user/form input directly into this function.
Only public attributes and relationships are supported. If you want to change private attributes as well, see the
Customization section below. `params` are stored directly as given in the `params` field of the changeset, which can be
used to retrieve the originally input value.

### Opts - Ash.Changeset.for_create/4 (function)

- `:require?` (`t:boolean/0`) - If set to `false`, values are only required when the action is run (instead of immediately). The default value is `false`.

- `:actor` (`t:term/0`) - set the actor, which can be used in any `Ash.Resource.Change`s configured on the action. (in the `context` argument)

- `:authorize?` (`t:term/0`) - set authorize?, which can be used in any `Ash.Resource.Change`s configured on the action. (in the `context` argument)

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer to use. Will be carried over to the action. For more information see `Ash.Tracer`.

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - set the tenant on the changeset

- `:skip_unknown_inputs` - A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

- `:load` (`t:term/0`) - Data to load on the result after running the action.

- `:context` (`t:map/0`) - Context to set on the query, changeset, or input

- `:private_arguments` (`t:map/0`) - Private argument values to set before validations and changes. The default value is `%{}`.

- `:return_skipped_upsert?` (`t:boolean/0`) - If `true`, and a record was _not_ upserted because its filter prevented the upsert, the original record (which was _not_ upserted) will be returned. The default value is `false`.

### Customization - Ash.Changeset.for_create/4 (function)

A changeset can be provided as the first argument, instead of a resource, to allow
setting specific attributes ahead of time.

For example:

    MyResource
    |> Ash.Changeset.new()
    |> Ash.Changeset.change_attribute(:foo, 1)
    |> Ash.Changeset.for_create(:create, ...opts)

Once a changeset has been validated by `for_create/4` (or `for_update/4`), it isn't validated again in the action.
New changes added are validated individually, though. This allows you to create a changeset according
to a given action, and then add custom changes if necessary.

### What does this function do? - Ash.Changeset.for_create/4 (function)

The following steps are run when calling `Ash.Changeset.for_create/4`.

- Cast input params | This is any arguments in addition to any accepted attributes
- Set argument defaults
- Require any missing arguments
- Validate all provided attributes are accepted
- Require any accepted attributes that are `allow_nil?` false
- Set any default values for attributes
- Run action changes & validations
- Run validations, or add them in `before_action` hooks if using `d:Ash.Resource.Dsl.actions.create.validate|before_action?`. Any global validations are skipped if the action has `skip_global_validations?` set to `true`.

### Ash.Changeset.for_destroy/4 (function)

Constructs a changeset for a given destroy action, and validates it.

### Opts - Ash.Changeset.for_destroy/4 (function)

- `:actor` - set the actor, which can be used in any `Ash.Resource.Change`s configured on the action. (in the `context` argument)
- `:tenant` - set the tenant on the changeset
- `:private_arguments` - set private arguments on the changeset before validations and changes are run

Anything that is modified prior to `for_destroy/4` is validated against the rules of the action, while _anything after it is not_.

Once a changeset has been validated by `for_destroy/4`, it isn't validated again in the action.
New changes added are validated individually, though. This allows you to create a changeset according
to a given action, and then add custom changes if necessary.

### What does this function do? - Ash.Changeset.for_destroy/4 (function)

The following steps are run when calling `Ash.Changeset.for_destroy/4`.

- Cast input params | This is any arguments in addition to any accepted attributes
- Set argument defaults
- Require any missing arguments
- Validate all provided attributes are accepted
- Require any accepted attributes that are `allow_nil?` false
- Set any default values for attributes
- Run action changes & validations
- Run validations, or add them in `before_action` hooks if using `d:Ash.Resource.Dsl.actions.destroy.validate|before_action?`. Any global validations are skipped if the action has `skip_global_validations?` set to `true`.

### Ash.Changeset.for_update/4 (function)

Constructs a changeset for a given update action, and validates it.

Anything that is modified prior to `for_update/4` is validated against the rules of the action, while _anything after it is not_.

### What does this function do? - Ash.Changeset.for_update/4 (function)

The following steps are run when calling `Ash.Changeset.for_update/4`.

- Cast input params | This is any arguments in addition to any accepted attributes
- Set argument defaults
- Require any missing arguments
- Validate all provided attributes are accepted
- Require any accepted attributes that are `allow_nil?` false
- Set any default values for attributes
- Run action changes & validations
- Run validations, or add them in `before_action` hooks if using `d:Ash.Resource.Dsl.actions.update.validate|before_action?`. Any global validations are skipped if the action has `skip_global_validations?` set to `true`.

### Ash.Changeset.force_change_attribute/3 (function)

Changes an attribute even if it isn't writable

### Ash.Changeset.force_change_attributes/2 (function)

Calls `force_change_attribute/3` for each key/value pair provided.

### Ash.Changeset.force_change_new_attribute/3 (function)

Force change an attribute if it is not currently being changed.

See `change_new_attribute/3` for more.

### Ash.Changeset.force_change_new_attribute_lazy/3 (function)

Force change an attribute if it is not currently being changed, by calling the provided function.

See `change_new_attribute_lazy/3` for more.

### Ash.Changeset.force_delete_argument/2 (function)

Remove an argument from the changeset, not warning if the changeset has already been validated.

### Ash.Changeset.force_set_argument/3 (function)

Add an argument to the changeset, which will be provided to the action.

Does not show a warning when used in before/after action hooks.

### Ash.Changeset.force_set_arguments/2 (function)

Merge a map of arguments to the arguments list.

Does not show a warning when used in before/after action hooks.

### Ash.Changeset.fully_atomic_changeset/4 (function)

### Ash.Changeset.get_argument/2 (function)

Gets the value of an argument provided to the changeset.

### Ash.Changeset.get_argument_or_attribute/2 (function)

Gets the value of an argument provided to the changeset, falling back to `Ash.Changeset.get_attribute/2` if nothing was provided.

### Ash.Changeset.get_attribute/2 (function)

Gets the changing value or the original value of an attribute.

### Ash.Changeset.get_data/2 (function)

Gets the original value for an attribute

### Ash.Changeset.handle_errors/2 (function)

Sets a custom error handler on the changeset.

The error handler should be a two argument function or an mfa, in which case the first two arguments will be set
to the changeset and the error, w/ the supplied arguments following those. The changeset will be marked
as invalid regardless of the outcome of this callback.

Any errors generated are passed to `handle_errors`, which can return any of the following:

- `:ignore` - the error is discarded.
- `changeset` - a new (or the same) changeset. The error is not added.
- `{changeset, error}` - a new (or the same) error and changeset. The error is added to the changeset.
- `anything_else` - is treated as a new, transformed version of the error. The result is added as an error to the changeset.

### Ash.Changeset.is_valid/1 (macro)

A guard which checks if the Changeset is valid.

### Ash.Changeset.load/2 (function)

Calls the provided load statement on the result of the action at the very end of the action.

### Ash.Changeset.loading?/2 (function)

Returns true if the field/relationship or path to field/relationship is being loaded.

It accepts an atom or a list of atoms, which is treated for as a "path", i.e:

    Resource |> Ash.Changeset.load(friends: [enemies: [:score]]) |> Ash.Changeset.loading?([:friends, :enemies, :score])
    iex> true

    Resource |> Ash.Changeset.load(friends: [enemies: [:score]]) |> Ash.Changeset.loading?([:friends, :score])
    iex> false

    Resource |> Ash.Changeset.load(friends: [enemies: [:score]]) |> Ash.Changeset.loading?(:friends)
    iex> true

### Ash.Changeset.manage_relationship/4 (function)

Manages the related records by creating, updating, or destroying them as necessary.

Keep in mind that the default values for all `on_*` are `:ignore`, meaning nothing will happen
unless you provide instructions.

The input provided to `manage_relationship` should be a map, in the case of to_one relationships, or a list of maps
in the case of to_many relationships. The following steps are followed for each input provided:

- The input is checked against the currently related records to find any matches. The primary key and unique identities are used to find matches.
- For any input that had a match in the current relationship, the `:on_match` behavior is triggered
- For any input that does not have a match:
  - if there is `on_lookup` behavior:
    - we try to find the record in the data layer.
    - if the record is found, the on_lookup behavior is triggered
    - if the record is not found, the `on_no_match` behavior is triggered
  - if there is no `on_lookup` behavior:
    - the `on_no_match` behavior is triggered
- finally, for any records present in the _current relationship_ that had no match _in the input_, the `on_missing` behavior is triggered

### Options - Ash.Changeset.manage_relationship/4 (function)

- `:type` - If the `type` is specified, the default values of each option is modified to match that `type` of operation.
  This allows for specifying certain operations much more succinctly. The defaults that are modified are listed below:

  - `:append_and_remove`
    [
    on_lookup: :relate,
    on_no_match: :error,
    on_match: :ignore,
    on_missing: :unrelate
    ]
  - `:append`
    [
    on_lookup: :relate,
    on_no_match: :error,
    on_match: :ignore,
    on_missing: :ignore
    ]
  - `:remove`
    [
    on_no_match: :error,
    on_match: :unrelate,
    on_missing: :ignore
    ]
  - `:direct_control`
    [
    on_lookup: :ignore,
    on_no_match: :create,
    on_match: :update,
    on_missing: :destroy
    ]
  - `:create`
    [
    on_no_match: :create,
    on_match: :ignore
    ]
    Valid values are :append_and_remove, :append, :remove, :direct_control, :create

- `:authorize?` (`t:boolean/0`) - Authorize reads and changes to the destination records, if the primary change is being authorized as well. The default value is `true`.

- `:eager_validate_with` (`t:atom/0`) - Validates that any referenced entities exist _before_ the action is being performed, using the provided domain for the read. The default value is `false`.

- `:on_no_match` (`t:term/0`) - Instructions for handling records where no matching record existed in the relationship.

  - `:ignore` (default) - those inputs are ignored
  - `:match` - For `has_one` and `belongs_to` only, any input is treated as a match for an existing value. For `has_many` and `many_to_many`, this is the same as `:ignore`.
  - `:create` - the records are created using the destination's primary create action
  - `{:create, :action_name}` - the records are created using the specified action on the destination resource
  - `{:create, :action_name, :join_table_action_name, [:list, :of, :join_table, :params]}` - Same as `{:create, :action_name}` but takes
    the list of params specified out and applies them when creating the join record, with the provided join_table_action_name.
  - `:error` - an error is returned indicating that a record would have been created
    - If `on_lookup` is set, and the data contained a primary key or identity, then the error is a `NotFound` error
    - Otherwise, an `InvalidRelationship` error is returned The default value is `:ignore`.

- `:value_is_key` (`t:atom/0`) - Configures what key to use when a single value is provided.
  This is useful when you use things like a list of strings i.e `friend_emails` to manage the relationship, instead of a list of maps.
  By default, we assume it is the primary key of the destination resource, unless it is a composite primary key.

- `:order_is_key` (`t:atom/0`) - If set, the order that each input appears in the list will be added to the input as this key.
  This is useful when you want to accept an ordered list of related records and write that order to the entity.
  This should only currently be used with `type: :direct_control` or `type: :create` when there are no currently
  existing related records (like when creating the source record).
  If you have an identity on the field and relationship id on the destination, and you are using
  AshPostgres, you will want to use the `deferrable` option to ensure that conflicting orders are temporarily
  allowed within a single transaction.

- `:identity_priority` (list of `t:atom/0`) - The list, in priority order, of identities to use when looking up records for `on_lookup`, and matching records with `on_match`.
  Use `:_primary_key` to prioritize checking a match with the primary key.
  All identities, along with `:_primary_key` are checked regardless, this only allows ensuring that some are checked first.
  Defaults to the list provided by `use_identities`, so you typically won't need this option.

- `:use_identities` (list of `t:atom/0`) - A list of identities that may be used to look up and compare records. Use `:_primary_key` to include the primary key. By default, only `[:_primary_key]` is used.

- `:on_lookup` (`t:term/0`) - Before creating a record (because no match was found in the relationship), the record can be looked up and related.

  - `:ignore` (default) - Does not look for existing entries (matches in the current relationship are still considered updates)
  - `:relate` - Same as calling `{:relate, primary_action_name}`
  - `{:relate, :action_name}` - the records are looked up by primary key/the first identity that is found (using the primary read action), and related. The action should be:
    - `many_to_many` - a create action on the join resource
    - `has_many` - an update action on the destination resource
    - `has_one` - an update action on the destination resource
    - `belongs_to` - an update action on the source resource
  - `{:relate, :action_name, :read_action_name}` - Same as the above, but customizes the read action called to search for matches.
  - `:relate_and_update` - Same as `:relate`, but the remaining parameters from the lookup are passed into the action that is used to change the relationship key
  - `{:relate_and_update, :action_name}` - Same as the above, but customizes the action used. The action should be:
    - `many_to_many` - a create action on the join resource
    - `has_many` - an update action on the destination resource
    - `has_one` - an update action on the destination resource
    - `belongs_to` - an update action on the source resource
  - `{:relate_and_update, :action_name, :read_action_name}` - Same as the above, but customizes the read action called to search for matches.
  - `{:relate_and_update, :action_name, :read_action_name, [:list, :of, :join_table, :params]}` - Same as the above, but uses the provided list of parameters when creating
    the join row (only relevant for many to many relationships). Use `:*` to _only_ update the join record, and pass all parameters to its action The default value is `:ignore`.

- `:on_match` (`t:term/0`) - Instructions for handling records where a matching record existed in the relationship already.

  - `:ignore` (default) - those inputs are ignored
  - `:update` - the record is updated using the destination's primary update action
  - `{:update, :action_name}` - the record is updated using the specified action on the destination resource
  - `{:update, :action_name, :join_table_action_name, [:list, :of, :params]}` - Same as `{:update, :action_name}` but takes
    the list of params specified out and applies them as an update to the join record (only valid for many to many)
  - `:update_join` - update only the join record (only valid for many to many)
  - `{:update_join, :join_table_action_name}` - use the specified update action on a join resource
  - `{:update_join, :join_table_action_name, [:list, :of, :params]}` - pass specified params from input into a join resource update action
  - `{:destroy, :action_name}` - the record is destroyed using the specified action on the destination resource. The action should be:
    - `many_to_many` - a destroy action on the join record
    - `has_many` - a destroy action on the destination resource
    - `has_one` - a destroy action on the destination resource
    - `belongs_to` - a destroy action on the destination resource
  - `:error` - an error is returned indicating that a record would have been updated
  - `:no_match` - follows the `on_no_match` instructions with these records
  - `:missing` - follows the `on_missing` instructions with these records
  - `:unrelate` - the related item is not destroyed, but the data is "unrelated", making this behave like `remove_from_relationship/3`. The action should be:
    - `many_to_many` - the join resource row is destroyed
    - `has_many` - the `destination_attribute` (on the related record) is set to `nil`
    - `has_one` - the `destination_attribute` (on the related record) is set to `nil`
    - `belongs_to` - the `source_attribute` (on this record) is set to `nil`
  - `{:unrelate, :action_name}` - the record is unrelated using the provided update action. The action should be:
    - `many_to_many` - a destroy action on the join resource
    - `has_many` - an update action on the destination resource
    - `has_one` - an update action on the destination resource
    - `belongs_to` - an update action on the source resource The default value is `:ignore`.

- `:on_missing` (`t:term/0`) - Instructions for handling records that existed in the current relationship but not in the input.

  - `:ignore` (default) - those inputs are ignored
  - `:destroy` - the record is destroyed using the destination's primary destroy action
  - `{:destroy, :action_name}` - the record is destroyed using the specified action on the destination resource
  - `{:destroy, :action_name, :join_resource_action_name}` - the record is destroyed using the specified action on the destination resource,
    but first the join resource is destroyed with its specified action
  - `:error` - an error is returned indicating that a record would have been updated
  - `:unrelate` - the related item is not destroyed, but the data is "unrelated", making this behave like `remove_from_relationship/3`. The action should be:
    - `many_to_many` - the join resource row is destroyed
    - `has_many` - the `destination_attribute` (on the related record) is set to `nil`
    - `has_one` - the `destination_attribute` (on the related record) is set to `nil`
    - `belongs_to` - the `source_attribute` (on this record) is set to `nil`
  - `{:unrelate, :action_name}` - the record is unrelated using the provided update action. The action should be:
    - `many_to_many` - a destroy action on the join resource
    - `has_many` - an update action on the destination resource
    - `has_one` - an update action on the destination resource
    - `belongs_to` - an update action on the source resource The default value is `:ignore`.

- `:error_path` (`t:term/0`) - By default, errors added to the changeset will use the path `[:relationship_name]`, or `[:relationship_name,  ]`.
  If you want to modify this path, you can specify `error_path`, e.g if had a `change` on an action that takes an argument
  and uses that argument data to call `manage_relationship`, you may want any generated errors to appear under the name of that
  argument, so you could specify `error_path: :argument_name` when calling `manage_relationship`.

- `:join_keys` (list of `t:atom/0`) - For many to many relationships specifies the parameters to pick from the input and pass into a join resource action.
  Applicable in cases like `on_no_match: :create`, `on_match: :update` and `on_lookup: :relate`.
  Can be overwritten by a full form instruction tuple which contains join parameters at the end.

- `:meta` (`t:term/0`) - Freeform data that will be retained along with the options, which can be used to track/manage the changes
  that are added to the `relationships` key. Use the `meta[:order]` option to specify the order in which multiple
  calls to `manage_relationship` should be executed.

- `:ignore?` (`t:term/0`) - This tells Ash to ignore the provided inputs when actually running the action. This can be useful for
  building up a set of instructions that you intend to handle manually. The default value is `false`.

Each call to this function adds new records that will be handled according to their options. For example,
if you tracked "tags to add" and "tags to remove" in separate fields, you could input them like so:

```elixir
changeset
|> Ash.Changeset.manage_relationship(
  :tags,
  [%{name: "backend"}],
  on_lookup: :relate, #relate that tag if it exists in the database
  on_no_match: :error # error if a tag with that name doesn't exist
)
|> Ash.Changeset.manage_relationship(
  :tags,
  [%{name: "frontend"}],
  on_no_match: :error, # error if a tag with that name doesn't exist in the relationship
  on_match: :unrelate # if a tag with that name is related, unrelate it
)
```

When calling this multiple times with the `on_missing` option set, the list of records that are considered missing are checked
after each set of inputs is processed. For example, if you manage the relationship once with `on_missing: :unrelate`, the records
missing from your input will be removed, and _then_ your next call to `manage_relationship` will be resolved (with those records unrelated).
For this reason, it is suggested that you don't call this function multiple times with an `on_missing` instruction, as you may be
surprised by the result.

If you want the input to update existing entities, you need to ensure that the primary key (or unique identity) is provided as
part of the input. See the example below:

    changeset
    |> Ash.Changeset.manage_relationship(
      :comments,
      [%{rating: 10, contents: "foo"}],
      on_no_match: {:create, :create_action},
      on_missing: :ignore
    )
    |> Ash.Changeset.manage_relationship(
      :comments,
      [%{id: 10, rating: 10, contents: "foo"}],
      on_match: {:update, :update_action},
      on_no_match: {:create, :create_action})

This is a simple way to manage a relationship. If you need custom behavior, you can customize the action that is
called, which allows you to add arguments/changes. However, at some point you may want to forego this function
and make the changes yourself. For example:

    input = [%{id: 10, rating: 10, contents: "foo"}]

    changeset
    |> Ash.Changeset.after_action(fn _changeset, result ->
      # An example of updating comments based on a result of other changes
      for comment <- input do
        comment = Ash.get(Comment, comment.id)

        comment
        |> Map.update(:rating, 0, &(&1 * result.rating_weight))
        |> Ash.update!()
      end

      {:ok, result}
    end)

### Using records as input - Ash.Changeset.manage_relationship/4 (function)

Records can be supplied as the input values. If you do:

- if it would be looked up due to `on_lookup`, the record is used as-is
- if it would be created due to `on_no_match`, the record is used as-is
- Instead of specifying `join_keys`, those keys must go in `__metadata__.join_keys`. If `join_keys` is specified in the options, it is ignored.

For example:

```elixir
post1 =
  changeset
  |> Ash.create!()
  |> Ash.Resource.put_metadata(:join_keys, %{type: "a"})

post2 =
  changeset2
  |> Ash.create!()
  |> Ash.Resource.put_metadata(:join_keys, %{type: "b"})

author = Ash.create!(author_changeset)

Ash.Changeset.manage_relationship(
  author,
  :posts,
  [post1, post2],
  on_lookup: :relate
)
```

### Ash.Changeset.manage_relationship_type/0 (type)

### Ash.Changeset.new/1 (function)

Returns a new changeset over a resource.

_Warning_: You almost always want to use `for_action` or `for_create`, etc. over this function if possible.

You can use this to start a changeset and make changes prior to calling `for_action`. This is not typically
necessary, but can be useful as an escape hatch. For example:

```elixir
Resource
|> Ash.Changeset.new()
|> Ash.Changeset.change_attribute(:name, "foobar")
|> Ash.Changeset.for_action(...)
```

### Ash.Changeset.phase/0 (type)

### Ash.Changeset.prepare_changeset_for_action/3 (function)

### Ash.Changeset.present?/2 (function)

Checks if an argument is not nil or an attribute is not nil, either in the original data, or that it is not being changed to a `nil` value if it is changing.

This also accounts for the `accessing_from` context that is set when using `manage_relationship`, so it is aware that a particular value
_will_ be set by `manage_relationship` even if it isn't currently being set.

### Ash.Changeset.put_context/3 (function)

Puts a key/value in the changeset context that can be used later.

Do not use the `private` key in your custom context, as that is reserved for internal use.

### Ash.Changeset.run_before_transaction_hooks/1 (function)

### Ash.Changeset.select/3 (function)

Ensure that only the specified attributes are present in the results.

The first call to `select/2` will replace the default behavior of selecting
all attributes. Subsequent calls to `select/2` will combine the provided
fields unless the `replace?` option is provided with a value of `true`.

If a field has been deselected, selecting it again will override that (because a single list of fields is tracked for selection)

Primary key attributes always selected and cannot be deselected.

When attempting to load a relationship (or manage it with `Ash.Changeset.manage_relationship/3`),
if the source field is not selected on the query/provided data an error will be produced. If loading
a relationship with a query, an error is produced if the query does not select the destination field
of the relationship.

Datalayers currently are not notified of the `select` for a changeset(unlike queries), and creates/updates select all fields when they are performed.
A select provided on a changeset sets the unselected fields to `nil` before returning the result.

Use `ensure_selected/2` if you wish to make sure a field has been selected, without deselecting any other fields.

### Ash.Changeset.selecting?/2 (function)

### Ash.Changeset.set_argument/3 (function)

Add an argument to the changeset, which will be provided to the action.

### Ash.Changeset.set_arguments/2 (function)

Merge a map of arguments to the arguments list.

### Ash.Changeset.set_context/2 (function)

Deep merges the provided map into the changeset context that can be used later.

Do not use the `private` key in your custom context, as that is reserved for internal use.

### Ash.Changeset.set_private_argument/3 (function)

Add a private argument to the changeset, which will be provided to the action.

### Ash.Changeset.set_result/2 (function)

Set the result of the action. This will prevent running the underlying datalayer behavior

### Ash.Changeset.set_tenant/2 (function)

### Ash.Changeset.t/0 (type)

### Ash.Changeset.timeout/3 (function)

### Ash.Changeset.update_change/3 (function)

Updates an existing attribute change by applying a function to it.

This is useful for applying some kind of normalization to the attribute.

```elixir
Ash.Changeset.update_change(changeset, :serial, &String.downcase/1)
```

The update function gets called with the value already cast to the correct type.

```elixir
changeset
|> Ash.Changeset.change_attribute(:integer_attribute, "3")
|> Ash.Changeset.update_change(:integer_attribute, fn x -> x + 1 end)
```

### Invalid value handling - Ash.Changeset.update_change/3 (function)

If `update_change` is called with a changeset that has not been validated yet, the update
function must handle potentially invalid and `nil` values.

To only deal with valid values, you can call `update_change` in a `before_action` hook.

### Ash.Changeset.with_hooks/3 (function)

Wraps a function in the before/after action hooks of a changeset.

The function takes a changeset and if it returns
`{:ok, result}`, the result will be passed through the after
action hooks.

### Ash.Domain (behaviour)

A domain allows you to interact with your resources, and holds domain-wide configuration.

For example, the json domain extension adds a domain extension that lets you toggle authorization on/off
for all resources in a given domain. You include resources in your domain like so:

```elixir
defmodule MyApp.MyDomain do
  use Ash.Domain

  resources do
    resource OneResource
    resource SecondResource
  end
end
```

### Options - Ash.Domain (behaviour)

- `:validate_config_inclusion?` (`t:boolean/0`) - Whether or not to validate that this domain is included in the configuration. The default value is `true`.

- `:backwards_compatible_interface?` (`t:boolean/0`) - Whether or not to include the 2.0 backwards compatible interface, which includes all of the interaction functions which are now defined on the `Ash` module The default value is `true`.

- `:extensions` (list of module that adopts `Spark.Dsl.Extension`) - A list of DSL extensions to add to the `Spark.Dsl`

- `:authorizers` (one or a list of module that adopts `Ash.Authorizer`) - authorizers extensions to add to the `Spark.Dsl` The default value is `[]`.

- `:otp_app` (`t:atom/0`) - The otp_app to use for any application configurable options

- `:fragments` (list of `t:module/0`) - Fragments to include in the `Spark.Dsl`. See the fragments guide for more.

### Ash.Domain.t/0 (type)

### Ash.Query (module)

A data structure for reading data from a resource.

Queries are run by calling `Ash.read/2`.

Examples:

```elixir
require Ash.Query

MyApp.Post
|> Ash.Query.filter(likes > 10)
|> Ash.Query.sort([:title])
|> Ash.read!()

MyApp.Author
|> Ash.Query.aggregate(:published_post_count, :posts, query: [filter: [published: true]])
|> Ash.Query.sort(published_post_count: :desc)
|> Ash.Query.limit(10)
|> Ash.read!()

MyApp.Author
|> Ash.Query.load([:post_count, :comment_count])
|> Ash.Query.load(posts: [:comments])
|> Ash.read!()
```

To see more examples of what you can do with `Ash.Query` and read actions in general,
see the [writing queries how-to guide](/documentation/how-to/write-queries.livemd).

### Capabilities & Limitations - Ash.Query (module)

Ash Framework provides a comprehensive suite of querying tools designed to address common application development needs. While powerful and flexible, these tools are focused on domain-driven design rather than serving as a general-purpose ORM.

Ash's query tools support:

- Filtering records based on complex conditions
- Sorting results using single or multiple criteria
- Setting result limits and offsets
- Pagination, with offset/limit and keysets
- Selecting distinct records to eliminate duplicates
- Computing dynamic properties at query time
- Aggregating data from related resources

While Ash's query tools often eliminate the need for direct database queries, Ash is not itself designed to be a comprehensive ORM or database query builder.

For specialized querying needs that fall outside Ash's standard capabilities, the framework provides escape hatches. These mechanisms allow developers to implement custom query logic when necessary. For detailed information about these escape hatches, refer to the `Ash.Query` module documentation.

### Important Considerations - Ash.Query (module)

1. Ash is primarily a domain modeling framework, not a database abstraction layer
2. While comprehensive, the tooling is intentionally constrained to resource-oriented access
3. Escape hatches exist for cases that require custom query logic

For complex queries that fall outside these tools, consider whether they represent domain concepts that could be modeled differently, or if they truly require custom implementation through escape hatches.

### Escape Hatches - Ash.Query (module)

Many of these tools are surprisingly deep and capable, covering everything you
need to build your domain logic. With that said, these tools are _not_
designed to encompass _every kind of query_ that you could possibly want to
write over your data. `Ash` is _not_ an ORM or a database query tool, despite
the fact that its query building tools often make those kinds of tools
unnecessary in all but the rarest of cases. Not every kind of query that you
could ever wish to write can be expressed with Ash.Query. Elixir has a
best-in-class library for working directly with databases, called
[Ecto](https://hexdocs.pm/ecto/Ecto.html), and if you end up building a
certain type of feature like analytics or reporting dashboards, you may find
yourself working directly with Ecto. Data layers like AshPostgres are built
on top of Ecto. In fact, every `Ash.Resource` is an `Ecto.Schema`!

>

### Choose escape hatches wisely - Ash.Query (module)

> You should choose to use Ash builtin functionality wherever possible.
> Barring that, you should choose the _least powerful_ escape hatch that
> can solve your problem. The options below are presented in the order
> that you should prefer them, but you should only use _any of them_
> if no builtin tooling will suffice.

### Fragments - Ash.Query (module)

Fragments only barely count as an escape hatch. You will often find yourself
wanting to use a function or operator specific to your data layer, and fragments
are purpose built to this end. You can use data-layer-specific expressions in your
expressions for filters, calculations, etc. For example:

```elixir
Resource
|> Ash.Query.filter(expr(fragment("lower(?)", name) == "fred"))
|> Ash.Query.filter(expr(fragment("? @> ?", tags, ["important"])))
```

### Manual Read Actions - Ash.Query (module)

See [the manual read actions guide](/documentation/topics/actions/manual-actions.md).

### `d:Ash.Resource.Dsl|actions.read.modify_query`

When running read actions, you can modify the underlying data layer query directly,
which can solve for cases when you cannot express your query using the standard Ash query interface.

```elixir
actions do
  read :complex_search do
    argument
    modify_query {SearchMod, :modify, []}
  end
end
```

```elixir
defmodule SearchMod do
  def modify(ash_query, data_layer_query) do
    # Here you can modify the underlying data layer query directly
    # For example, with AshPostgres you get access to the Ecto query
    {:ok, Ecto.Query.where(data_layer_query, [p], fragment("? @@ plainto_tsquery(?)", p.search_vector, ^ash_query.arguments.search_text))}
  end
end
```

### Using Ecto directly - Ash.Query (module)

For data layers like `AshPostgres`, you can interact directly with `Ecto`. You can do this
by using the `Ash.Resource` as its corresponding `Ecto.Schema`, like so:

```elixir
import Ecto.Query

query =
  from p in MyApp.Post,
    where: p.likes > 100,
    select: p

 MyApp.Repo.all(query)
```

Or you can build an `Ash.Query`, and get the corresponding ecto query:

```elixir
MyApp.Post
|> Ash.Query.for_read(:read)
|> Ash.Query.data_layer_query()
|> case do
  {:ok, ecto_query} ->
    ecto_query
    |> Ecto.Query.where([p], p.likes > 100)
    |> MyApp.Repo.all()

  {:error, error} ->
    {:error, error}
end
```

### Ash.Query.accessing/3 (function)

Returns a list of attributes, aggregates, relationships, and calculations that are being loaded

Provide a list of field types to narrow down the returned results.

### Ash.Query.add_error/3 (function)

Add an error to the errors list and mark the query as invalid.

See `Ash.Error.to_ash_error/3` for more on supported values for `error`

### Inconsistencies - Ash.Query.add_error/3 (function)

The `path` argument is the second argument here, but the third argument
in `Ash.ActionInput.add_error/2` and `Ash.Changeset.add_error/2`.
This will be fixed in 4.0.

### Ash.Query.after_action/2 (function)

### Ash.Query.aggregate/4 (function)

Adds an aggregation to the query.

Aggregations are made available on the `aggregates` field of the records returned

The filter option accepts either a filter or a keyword list of options to supply to build a limiting query for that aggregate.
See the DSL docs for each aggregate type in the [Resource DSL docs](dsl-ash-resource.html#aggregates) for more information.

### Options - Ash.Query.aggregate/4 (function)

- query: The query over the destination resource to use as a base for aggregation
  - field: - The field to use for the aggregate. Not necessary for all aggregate types
  - default: The default value to use if the aggregate returns nil
  - filterable?: Whether or not this aggregate may be referenced in filters
  - type: The type of the aggregate
  - constraints: Type constraints for the aggregate's type
  - implementation: An implementation used when the aggregate kind is custom
  - read_action: The read action to use on the destination resource
  - authorize?: Whether or not to authorize access to this aggregate
  - join_filters: A map of relationship paths to filter expressions. See the aggregates guide for more

### Ash.Query.aggregate/5 (function)

### Ash.Query.apply_to/3 (function)

### Ash.Query.around_action_fun/0 (type)

### Ash.Query.around_callback/0 (type)

### Ash.Query.around_result/0 (type)

### Ash.Query.around_transaction/2 (function)

Adds an around_transaction hook to the query.

Your function will get the query, and a callback that must be called with a query (that may be modified).
The callback will return `{:ok, results}` or `{:error, error}`. You can modify these values, but the return value
must be one of those types.

The around_transaction calls happen first, and then (after they each resolve their callbacks) the `before_action`
hooks are called, followed by the `after_action` hooks being run. Then, the code that appeared _after_ the callbacks were called is then run.

Warning: using this without understanding how it works can cause big problems.
You _must_ call the callback function that is provided to your hook, and the return value must
contain the same structure that was given to you, i.e `{:ok, result_of_action}`.

### Ash.Query.around_transaction_fun/0 (type)

### Ash.Query.authorize_results/2 (function)

### Ash.Query.before_action/3 (function)

Adds a before_action hook to the query.

Provide the option `prepend?: true` to place the hook before all
other hooks instead of after.

### Ash.Query.build/3 (function)

Builds a query from a keyword list.

This is used by certain query constructs like aggregates. It can also be used to manipulate a data structure
before passing it to an ash query. It allows for building an entire query struct using only a keyword list.

For example:

```elixir
Ash.Query.build(MyResource, filter: [name: "fred"], sort: [name: :asc], load: [:foo, :bar], offset: 10)
```

If you want to use the expression style filters, you can use `expr/1`.

For example:

```elixir
import Ash.Expr, only: [expr: 1]

Ash.Query.build(Myresource, filter: expr(name == "marge"))
```

### Options - Ash.Query.build/3 (function)

- `:filter` (`t:term/0`) - A filter keyword, map or expression

- `:filter_input` (`t:term/0`) - A filter keyword or map, provided as input from an external source

- `:sort` (`t:term/0`) - A sort list or keyword

- `:sort_input` (`t:term/0`) - A sort list or keyword, provided as input from an external source

- `:default_sort` (`t:term/0`) - A sort list or keyword to apply only if no other sort is specified, So if you apply any `sort`, this will be ignored.

- `:distinct_sort` (`t:term/0`) - A distinct_sort list or keyword

- `:limit` (`t:integer/0`) - A limit to apply

- `:offset` (`t:integer/0`) - An offset to apply

- `:load` (`t:term/0`) - A load statement to add to the query

- `:select` (`t:term/0`) - A select statement to add to the query

- `:ensure_selected` (`t:term/0`) - An ensure_selected statement to add to the query

- `:aggregate` (`t:term/0`) - A custom aggregate to add to the query. Can be `{name, type, relationship}` or `{name, type, relationship, build_opts}`

- `:calculate` (`t:term/0`) - A custom calculation to add to the query. Can be `{name, module_and_opts}` or `{name, module_and_opts, context}`

- `:distinct` (list of `t:atom/0`) - A distinct clause to add to the query

- `:context` (`t:map/0`) - A map to merge into the query context

### Ash.Query.calculate/8 (function)

Adds a calculation to the query.

Calculations are made available on the `calculations` field of the records returned

The `module_and_opts` argument accepts either a `module` or a `{module, opts}`. For more information
on what that module should look like, see `Ash.Resource.Calculation`.

### Ash.Query.clear_result/1 (function)

Removes a result set previously with `set_result/2`

### Ash.Query.combination_calcs/2 (function)

### Ash.Query.combination_of/2 (function)

Produces a query that is the combination of multiple queries.

All aspects of the parent query are applied to the combination in total.

See `Ash.Query.Combination` for more on creating combination queries.

### Example - Ash.Query.combination_of/2 (function)

```elixir
# Top ten users not on a losing streak and top ten users who are not on a winning streak
User
|> Ash.Query.filter(active == true)
|> Ash.Query.combination_of([
  # must always begin with a base combination
  Ash.Query.Combination.base(
    sort: [score: :desc],
    filter: expr(not(on_a_losing_streak)),
    limit: 10
  ),
  Ash.Query.Combination.union(
    sort: [score: :asc],
    filter: expr(not(on_a_winning_streak)),
    limit: 10
  )
])
|> Ash.read!()
```

### Select and calculations - Ash.Query.combination_of/2 (function)

There is no `select` available for combinations, instead the select of the outer query
is used for each combination. However, you can use the `calculations` field in
`Ash.Query.Combination` to add expression calculations. Those calculations can "overwrite"
a selected attribute, or can introduce a new field. Note that, for SQL data layers, all
combinations will be required to have the same number of fields in their SELECT statement,
which means that if one combination adds a calculation, all of the others must also add
that calculation.

In this example, we compute separate match scores

```elixir
query = "fred"

User
|> Ash.Query.filter(active == true)
|> Ash.Query.combination_of([
  # must always begin with a base combination
  Ash.Query.Combination.base(
    filter: expr(trigram_similarity(user_name, ^query) >= 0.5),
    calculate: %{
      match_score: trigram_similarity(user_name, ^query)
    },
    sort: [
      calc(trigram_similarity(user_name, ^query), :desc)
    ],
    limit: 10
  ),
  Ash.Query.Combination.union(
    filter: expr(trigram_similarity(email, ^query) >= 0.5),
    calculate: %{
      match_score: trigram_similarity(email, ^query)
    },
    sort: [
      calc(trigram_similarity(email, ^query), :desc)
    ],
    limit: 10
  )
])
|> Ash.read!()
```

### Ash.Query.data_layer_query/2 (function)

Return the underlying data layer query for an ash query

### Ash.Query.default_sort/3 (function)

Apply a sort only if no sort has been specified yet.

This is useful for providing default sorts that can be overridden.

### Examples - Ash.Query.default_sort/3 (function)

```elixir
# This will sort by name if no sort has been specified
Ash.Query.default_sort(query, :name)

# This will sort by name descending if no sort has been specified
Ash.Query.default_sort(query, name: :desc)
```

### Ash.Query.delete_argument/2 (function)

Remove an argument from the query

### Ash.Query.deselect/2 (function)

Ensure the the specified attributes are `nil` in the query results.

### Ash.Query.distinct/2 (function)

Get results distinct on the provided fields.

Takes a list of fields to distinct on. Each call is additive, so to remove the `distinct` use
`unset/2`.

Examples:

```
Ash.Query.distinct(query, [:first_name, :last_name])

Ash.Query.distinct(query, :email)
```

### Ash.Query.distinct_sort/3 (function)

Set a sort to determine how distinct records are selected.

If none is set, any sort applied to the query will be used.

This is useful if you want to control how the `distinct` records
are selected without affecting (necessarily, it may affect it if
there is no sort applied) the overall sort of the query

### Ash.Query.ensure_selected/2 (function)

Ensures that the given attributes are selected.

The first call to `select/2` will _limit_ the fields to only the provided fields.
Use `ensure_selected/2` to say "select this field (or these fields) without deselecting anything else".

See `select/2` for more.

### Ash.Query.equivalent_to/2 (macro)

Determines if the filter statement of a query is equivalent to the provided expression.

This uses the satisfiability solver that is used when solving for policy authorizations. In complex scenarios, or when using
custom database expressions, (like fragments in ash_postgres), this function may return `:maybe`. Use `supserset_of?` to always return
a boolean.

### Ash.Query.equivalent_to?/2 (macro)

Same as `equivalent_to/2` but always returns a boolean. `:maybe` returns `false`.

### Ash.Query.fetch_argument/2 (function)

fetches the value of an argument provided to the query or `:error`

### Ash.Query.filter/2 (macro)

Attach a filter statement to the query.

The filter is applied as an "and" to any filters currently on the query.
For more information on writing filters, see: `Ash.Filter`.

### Ash.Query.filter_input/2 (function)

Attach a filter statement to the query labelled as user input.

Filters added as user input (or filters constructed with `Ash.Filter.parse_input`)
will honor any field policies on resources by replacing any references to the field
with `nil` in cases where the actor should not be able to see the given field.

This function does not expect the expression style filter (because an external source
could never reasonably provide that). Instead, use the keyword/map style syntax. For
example:

`expr(name == "fred")`

could be any of

- map syntax: `%{"name" => %{"eq" => "fred"}}`
- keyword syntax: `[name: [eq: "fred"]]`

See `Ash.Filter` for more.

### Ash.Query.for_read/4 (function)

Creates a query for a given read action and prepares it.

Multitenancy is _not_ validated until an action is called. This allows you to avoid specifying a tenant until just before calling
the domain action.

### Arguments - Ash.Query.for_read/4 (function)

Provide a map or keyword list of arguments for the read action

### Opts - Ash.Query.for_read/4 (function)

- `:actor` (`t:term/0`) - set the actor, which can be used in any `Ash.Resource.Change`s configured on the action. (in the `context` argument)

- `:authorize?` (`t:boolean/0`) - set authorize?, which can be used in any `Ash.Resource.Change`s configured on the action. (in the `context` argument)

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer to use. Will be carried over to the action. For more information see `Ash.Tracer`.

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - set the tenant on the query

- `:load` (`t:term/0`) - A load statement to apply to the query

- `:skip_unknown_inputs` - A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

- `:context` (`t:map/0`) - A map of context to set on the query. This will be merged with any context set on the query itself.

### Ash.Query.get_argument/2 (function)

Gets the value of an argument provided to the query

### Ash.Query.limit/2 (function)

Limit the results returned from the query

### Ash.Query.load/3 (function)

Loads relationships, calculations, or aggregates on the resource.

By default, loading attributes has no effects, as all attributes are returned.

```elixir
# Loading nested relationships
Ash.Query.load(query, [comments: [:author, :ratings]])

# Loading relationships with a query
Ash.Query.load(query, [comments: [author: author_query]])
```

By passing the `strict?: true` option, only specified attributes will be loaded when passing
a list of fields to fetch on a relationship, which allows for more optimized data-fetching.

The select statement of any queries inside the load statement will not be affected.

Example:

```elixir
Ash.load(category, [:name, posts: [:title, :published_at]], strict?: true)
```

Here, the only fields that will be loaded on the `posts` relationship are `title` and
`published_at`, in addition to any other fields that are required to be loaded, like the
primary and relevant foreign keys.
This entails that when using `strict?: true` and loading nested relationships, you will also
always have to specify all the attributes you want to load alongside the nested relationships.

Example:

```elixir
Ash.load(post, [:title, :published_at, :other_needed_attribute, category: [:name]], strict?: true)
```

If no fields are specified on a relationship when using `strict?: true`, all attributes will be
loaded by default.

Example:

```elixir
Ash.load(category, [:name, :posts], strict?: true)
```

### Ash.Query.load_calculation_as/5 (function)

Adds a resource calculation to the query as a custom calculation with the provided name.

Example:

    Ash.Query.load_calculation_as(query, :calculation, :some_name, args: %{}, load_through: [:foo])

### Ash.Query.load_through/4 (function)

Adds a load statement to the result of an attribute or calculation.

Uses `Ash.Type.load/5` to request that the type load nested data.

### Ash.Query.loading?/2 (function)

Returns true if the field/relationship or path to field/relationship is being loaded.

It accepts an atom or a list of atoms, which is treated for as a "path", i.e:

    Resource |> Ash.Query.load(friends: [enemies: [:score]]) |> Ash.Query.loading?([:friends, :enemies, :score])
    iex> true

    Resource |> Ash.Query.load(friends: [enemies: [:score]]) |> Ash.Query.loading?([:friends, :score])
    iex> false

    Resource |> Ash.Query.load(friends: [enemies: [:score]]) |> Ash.Query.loading?(:friends)
    iex> true

### Ash.Query.lock/2 (function)

Lock the query results.

This must be run while in a transaction, and is not supported by all data layers.

### Ash.Query.merge_query_load/3 (function)

Merges two query's load statements, for the purpose of handling calculation requirements.

This should only be used if you are writing a custom type that is loadable.
See the callback documentation for `c:Ash.Type.merge_load/4` for more.

### Ash.Query.new/2 (function)

Create a new query

### Ash.Query.offset/2 (function)

Skip the first n records

### Ash.Query.page/2 (function)

Sets the pagination options of the query.

Pass `nil` to disable pagination.

### Limit/offset pagination - Ash.Query.page/2 (function)

- `:offset` (`t:non_neg_integer/0`) - The number of records to skip from the beginning of the query

- `:limit` (`t:pos_integer/0`) - The number of records to include in the page

- `:filter` (`t:term/0`) - A filter to apply for pagination purposes, that should not be considered in the full count.
  This is used by the liveview paginator to only fetch the records that were _already_ on the
  page when refreshing data, to avoid pages jittering.

- `:count` (`t:boolean/0`) - Whether or not to return the page with a full count of all records

### Keyset pagination - Ash.Query.page/2 (function)

- `:before` (`t:String.t/0`) - Get records that appear before the provided keyset (mutually exclusive with `after`)

- `:after` (`t:String.t/0`) - Get records that appear after the provided keyset (mutually exclusive with `before`)

- `:limit` (`t:pos_integer/0`) - How many records to include in the page

- `:filter` (`t:term/0`) - See the `filter` option for offset pagination, this behaves the same.

- `:count` (`t:boolean/0`) - Whether or not to return the page with a full count of all records

### Ash.Query.put_context/3 (function)

Sets a specific context key to a specific value

See `set_context/2` for more information.

### Ash.Query.select/3 (function)

Ensure that only the specified _attributes_ are present in the results.

The first call to `select/2` will replace the default behavior of selecting
all attributes. Subsequent calls to `select/2` will combine the provided
fields unless the `replace?` option is provided with a value of `true`.

If a field has been deselected, selecting it again will override that (because a single list of fields is tracked for selection)

Primary key attributes are always selected and cannot be deselected.

When attempting to load a relationship (or manage it with `Ash.Changeset.manage_relationship/3`),
if the source field is not selected on the query/provided data an error will be produced. If loading
a relationship with a query, an error is produced if the query does not select the destination field
of the relationship.

Use `ensure_selected/2` if you wish to make sure a field has been selected, without deselecting any other fields.

### Ash.Query.selecting?/2 (function)

### Ash.Query.set_argument/3 (function)

Add an argument to the query, which can be used in filter templates on actions

### Ash.Query.set_arguments/2 (function)

Merge a map of arguments to the arguments list

### Ash.Query.set_context/2 (function)

Merge a map of values into the query context

### Ash.Query.set_domain/2 (function)

Set the query's domain, and any loaded query's domain

### Ash.Query.set_result/2 (function)

Set the result of the action. This will prevent running the underlying datalayer behavior

### Ash.Query.set_tenant/2 (function)

### Ash.Query.sort/3 (function)

Sort the results based on attributes, aggregates or calculations.

### Format - Ash.Query.sort/3 (function)

Your sort can be an atom, list of atoms, a keyword list, or a string. When an order is not specified,
`:asc` is the default. See Sort Orders below for more on the available orders.

```elixir
# sort by name ascending
Ash.Query.sort(query, :name)

# sort by name descending
Ash.Query.sort(query, name: :desc)

# sort by name descending with nils at the end
Ash.Query.sort(query, name: :desc_nils_last)

# sort by name descending, and title ascending
Ash.Query.sort(query, name: :desc, title: :asc)

# sort by name ascending
Ash.Query.sort(query, "name")

# sort by name descending, and title ascending
Ash.Query.sort(query, "-name,title")

# sort by name descending with nils at the end
Ash.Query.sort(query, "--name")
```

### Related Fields - Ash.Query.sort/3 (function)

You can refer to related fields using the shorthand of `"rel1.rel2.field"`. For example:

```elixir
# sort by the username of the comment's author.
Ash.Query.sort(query, "comment.author.username")

# Use as an atom for keyword lists
Ash.Query.sort(query, "comment.author.username": :desc)
```

### Expression Sorts - Ash.Query.sort/3 (function)

You can use the `Ash.Expr.calc/2` macro to sort on expressions:

```elixir
import Ash.Expr

# Sort on an expression
Ash.Query.sort(query, calc(count(friends), :desc))

# Specify a type (required in some cases when we can't determine a type)
Ash.Query.sort(query, [{calc(fragment("some_sql(?)", field, type: :string), :desc}])
```

### Sort Strings - Ash.Query.sort/3 (function)

A comma separated list of fields to sort on, each with an optional prefix.

The prefixes are:

- "+" - Same as no prefix. Sorts `:asc`.
- "++" - Sorts `:asc_nils_first`
- "-" - Sorts `:desc`
- "--" - Sorts `:desc_nils_last`

For example

    "foo,-bar,++baz,--buz"

### A list of sort strings - Ash.Query.sort/3 (function)

Same prefix rules as above, but provided as a list.

For example:

    ["foo", "-bar", "++baz", "--buz"]

### Calculations - Ash.Query.sort/3 (function)

Calculation inputs can be provided by providing a map. To provide both inputs and an order,
use a tuple with the first element being the inputs, and the second element being the order.

```elixir
Ash.Query.sort(query, full_name: %{separator: " "})

Ash.Query.sort(query, full_name: {%{separator: " "}, :asc})
```

### Sort Orders - Ash.Query.sort/3 (function)

The available orders are:

- `:asc` - Sort values ascending, with lowest first and highest last, and `nil` values at the end
- `:desc` - Sort values descending, with highest first and lowest last, and `nil` values at the beginning
- `:asc_nils_first` - Sort values ascending, with lowest first and highest last, and `nil` values at the beginning
- `:desc_nils_last` - Sort values descending, with highest first and lowest last, and `nil` values at the end

### Examples - Ash.Query.sort/3 (function)

```elixir
Ash.Query.sort(query, [:foo, :bar])

Ash.Query.sort(query, [:foo, bar: :desc])

Ash.Query.sort(query, [foo: :desc, bar: :asc])
```

See the guide on calculations for more.

### Options - Ash.Query.sort/3 (function)

- `prepend?` - set to `true` to put your sort at the front of the list of a sort is already specified

### Ash.Query.sort_input/3 (function)

Attach a sort statement to the query labelled as user input.

Sorts added as user input (or filters constructed with `Ash.Filter.parse_input`)
will honor any field policies on resources by replacing any references to the field
with `nil` in cases where the actor should not be able to see the given field.

See `Ash.Query.sort/3` for more information on accepted formats.

### Ash.Query.struct?/1 (function)

### Ash.Query.subset_of/2 (macro)

Determines if the provided expression would return data that is a suprset of the data returned by the filter on the query.

This uses the satisfiability solver that is used when solving for policy authorizations. In complex scenarios, or when using
custom database expressions, (like fragments in ash_postgres), this function may return `:maybe`. Use `subset_of?` to always return
a boolean.

### Ash.Query.subset_of?/2 (macro)

Same as `subset_of/2` but always returns a boolean. `:maybe` returns `false`.

### Ash.Query.superset_of/2 (macro)

Determines if the provided expression would return data that is a subset of the data returned by the filter on the query.

This uses the satisfiability solver that is used when solving for policy authorizations. In complex scenarios, or when using
custom database expressions, (like fragments in ash_postgres), this function may return `:maybe`. Use `supserset_of?` to always return
a boolean.

### Ash.Query.superset_of?/2 (macro)

Same as `superset_of/2` but always returns a boolean. `:maybe` returns `false`.

### Ash.Query.t/0 (type)

### Ash.Query.timeout/2 (function)

### Ash.Query.unload/2 (function)

Removes a field from the list of fields to load

### Ash.Query.unset/2 (function)

### Ash.Query.Aggregate (module)

Represents an aggregated association value

### Ash.Query.Aggregate.default_value/1 (function)

### Ash.Query.Aggregate.kind/0 (type)

### Ash.Query.Aggregate.new/4 (function)

Create a new aggregate, used with `Query.aggregate` or `Ash.aggregate`

### Options - Ash.Query.Aggregate.new/4 (function)

- `:path` (list of `t:atom/0`) - The relationship path to aggregate over. Only used when adding aggregates to a query. The default value is `[]`.

- `:query` (`t:term/0`) - A base query to use for the aggregate, or a keyword list to be passed to `Ash.Query.build/2`

- `:field` - The field to use for the aggregate. Not necessary for all aggregate types.

- `:expr` (`t:term/0`) - An expression to aggregate, cannot be used with `field`.

- `:expr_type` - The type of the expression, required if `expr` is used.

- `:arguments` (`t:map/0`) - Arguments to pass to the field, if field is a calculation.

- `:default` (`t:term/0`) - A default value to use for the aggregate if it returns `nil`.

- `:filterable?` (`t:boolean/0`) - Whether or not this aggregate may be used in filters. The default value is `true`.

- `:sortable?` (`t:boolean/0`) - Whether or not this aggregate may be used in sorts. The default value is `true`.

- `:type` (`t:term/0`) - A type to use for the aggregate.

- `:constraints` (`t:term/0`) - Type constraints to use for the aggregate. The default value is `[]`.

- `:implementation` (`t:term/0`) - The implementation for any custom aggregates.

- `:read_action` (`t:atom/0`) - The read action to use for the aggregate, defaults to the primary read action.

- `:uniq?` (`t:boolean/0`) - Whether or not to only consider unique values. Only relevant for `count` and `list` aggregates. The default value is `false`.

- `:include_nil?` (`t:boolean/0`) - Whether or not to include `nil` values in the aggregate. Only relevant for `list` and `first` aggregates. The default value is `false`.

- `:join_filters` (map of one or a list of `t:atom/0` keys and `t:term/0` values) - A map of relationship paths (an atom or list of atoms), to an expression to apply when fetching the aggregate data. See the aggregates guide for more. The default value is `%{}`.

- `:sensitive?` (`t:boolean/0`) - Whether or not references to this aggregate will be considered sensitive The default value is `false`.

- `:tenant` (`t:term/0`) - The tenant to use for the aggregate, if applicable. The default value is `nil`.

- `:authorize?` (`t:boolean/0`) - Whether or not the aggregate query should authorize based on the target action.
  See `d:Ash.Resource.Dsl.aggregates|count` for more information. The default value is `true`.

### Ash.Query.Aggregate.new!/4 (function)

### Ash.Query.Aggregate.t/0 (type)

### Ash.Query.Calculation (module)

Represents a calculated attribute requested on a query

### Ash.Query.Calculation.from_resource_calculation/3 (function)

Creates a new query calculation from a resource calculation.

### Options - Ash.Query.Calculation.from_resource_calculation/3 (function)

- `:args` (`t:map/0`) - Arguments to pass to the calculation The default value is `%{}`.

- `:source_context` (`t:map/0`) - Context from the source query or changeset. The default value is `%{}`.

### Ash.Query.Calculation.from_resource_calculation!/3 (function)

Creates a new query calculation from a resource calculation, raising any errors.

See `from_resource_calculation/3` for more.

### Ash.Query.Calculation.new/6 (function)

Creates a new query calculation.

### Options - Ash.Query.Calculation.new/6 (function)

- `:arguments` (`t:map/0`) - Arguments to pass to the calculation The default value is `%{}`.

- `:async?` (`t:boolean/0`) - Whether or not this calculation should be run asynchronously The default value is `false`.

- `:filterable?` (`t:boolean/0`) - Whether or not this calculation can be filtered on The default value is `true`.

- `:sortable?` (`t:boolean/0`) - Whether or not this calculation can be sorted on The default value is `true`.

- `:sensitive?` (`t:boolean/0`) - Whether or not references to this calculation will be considered sensitive The default value is `false`.

- `:load` (`t:term/0`) - Loads that are required for the calculation.

- `:actor` (`t:term/0`) - The actor performing the calculation.

- `:tenant` (`t:term/0`) - The tenant performing the calculation.

- `:authorize?` (`t:boolean/0`) - Whether or not authorization is being performed

- `:tracer` (`t:term/0`) - The tracer or tracers used in the calculation.

- `:source_context` (`t:map/0`) - Context from the source query or changeset. The default value is `%{}`.

### Ash.Query.Calculation.t/0 (type)

### Ash.Resource.Preparation (behaviour)

The behaviour for an action-specific query preparation.

`c:init/1` is defined automatically by `use Ash.Resource.Preparation`, but can be implemented if you want to validate/transform any
options passed to the module.

The main function is `c:prepare/3`. It takes the query, any options that were provided
when this preparation was configured on a resource, and the context, which currently only has
the actor.

To access any query arguments from within a preparation, make sure you are using `Ash.Query.get_argument/2`
as the argument keys may be strings or atoms.

### Ash.Resource.Preparation.init/1 (callback)

### Ash.Resource.Preparation.prepare/3 (callback)

### Ash.Resource.Preparation.ref/0 (type)

### Ash.Resource.Preparation.t/0 (type)

### Ash.Resource.Preparation.Builtins (module)

Builtin query preparations

### Ash.Resource.Preparation.Builtins.after_action/1 (macro)

Directly attach an `after_action` function to the query.

This function will be called by `Ash.Query.after_action/2`,
with an additional `context` argument.

### Example - Ash.Resource.Preparation.Builtins.after_action/1 (macro)

prepare after_action(fn query, records, \_context ->
Logger.debug("Query for #{query.action.name} on resource #{inspect(query.resource)} returned #{length(records)} records")

      {:ok, records}
    end)

### Ash.Resource.Preparation.Builtins.before_action/1 (macro)

Directly attach a `before_action` function to the query.

This function will be called by `Ash.Query.before_action/2`,
with an additional `context` argument.

### Example - Ash.Resource.Preparation.Builtins.before_action/1 (macro)

prepare before_action(fn query, \_context ->
Logger.debug("About to execute query for #{query.action.name} on #{inspect(query.resource)}")

      query
    end)

### Ash.Resource.Preparation.Builtins.build/1 (function)

Passes the given keyword list to `Ash.Query.build/2` with the query being prepared.

This allows declaring simple query modifications in-line.

To see the available options, see `Ash.Query.build/2`

### Examples - Ash.Resource.Preparation.Builtins.build/1 (function)

prepare build(sort: [song_rank: :desc], limit: 10)
prepare build(load: [:friends])

### Ash.Resource.Preparation.Builtins.set_context/1 (function)

Merges the given query context.

If an MFA is provided, it will be called with the changeset.
The MFA should return `{:ok, context_to_be_merged}` or `{:error, term}`

### Examples - Ash.Resource.Preparation.Builtins.set_context/1 (function)

change set_context(%{something_used_internally: true})
change set_context({MyApp.Context, :set_context, []})

### Ash.Resource.Change (behaviour)

The behaviour for an action-specific resource change.

`c:init/1` is defined automatically by `use Ash.Resource.Change`, but can be implemented if you want to validate/transform any
options passed to the module.

The main function is `c:change/3`. It takes the changeset, any options that were provided
when this change was configured on a resource, and the context, which currently only has
the actor.

### Ash.Resource.Change.after_batch/3 (callback)

Runs on each batch result after it is dispatched to the data layer.

### Ash.Resource.Change.atomic/3 (callback)

### Ash.Resource.Change.atomic?/0 (callback)

### Ash.Resource.Change.batch_callbacks?/3 (callback)

Whether or not batch callbacks should be run (if they are defined). Defaults to `true`.

### Ash.Resource.Change.batch_change/3 (callback)

Replaces `change/3` for batch actions, allowing to optimize changes for bulk actions.

You can define only `batch_change/3`, and it will be used for both single and batch actions.
It cannot, however, be used in place of the `atomic/3` callback.

### Ash.Resource.Change.before_batch/3 (callback)

Runs on each batch before it is dispatched to the data layer.

### Ash.Resource.Change.change/3 (callback)

### Ash.Resource.Change.context/0 (type)

### Ash.Resource.Change.has_after_batch?/0 (callback)

### Ash.Resource.Change.has_batch_change?/0 (callback)

### Ash.Resource.Change.has_before_batch?/0 (callback)

### Ash.Resource.Change.has_change?/0 (callback)

### Ash.Resource.Change.init/1 (callback)

### Ash.Resource.Change.ref/0 (type)

### Ash.Resource.Change.t/0 (type)

### Ash.Resource.Change.Builtins (module)

Built in changes that are available to all resources

The functions in this module are imported by default in the actions section.

### Ash.Resource.Change.Builtins.after_action/2 (macro)

Directly attach an `after_action` function to the current change.

See `Ash.Changeset.after_action/3` for more information.

Provide the option `prepend?: true` to place the hook before all other hooks instead of after.

### Example - Ash.Resource.Change.Builtins.after_action/2 (macro)

change after_action(fn changeset, record, \_context ->
Logger.debug("Successfully executed action #{changeset.action.name} on #{inspect(changeset.resource)}")
{:ok, record}
end)

### Ash.Resource.Change.Builtins.after_transaction/2 (macro)

Directly attach an `after_transaction` function to the current change.

See `Ash.Changeset.after_transaction/3` for more information.

Provide the option `prepend?: true` to place the hook before all other hooks instead of after.

### Example - Ash.Resource.Change.Builtins.after_transaction/2 (macro)

change after_transaction(fn
changeset, {:ok, record}, \_context ->
Logger.debug("Successfully executed transaction for action #{changeset.action.name} on #{inspect(changeset.resource)}")
{:ok, record}
changeset, {:error, reason}, \_context ->
Logger.debug("Failed to execute transaction for action #{changeset.action.name} on #{inspect(changeset.resource)}, reason: #{inspect(reason)}")
{:error, reason}
end)

### Ash.Resource.Change.Builtins.atomic_update/3 (function)

Updates an attribute using an expression. See `Ash.Changeset.atomic_update/3` for more.

Options:

- `:cast_atomic?` - set to `false` to ignore atomic type casting logic. Defaults to `true`.

### Ash.Resource.Change.Builtins.before_action/2 (macro)

Directly attach a `before_action` function to the current change.

See `Ash.Changeset.before_action/3` for more information.

Provide the option `prepend?: true` to place the hook before all other hooks instead of after.

### Example - Ash.Resource.Change.Builtins.before_action/2 (macro)

change before_action(fn changeset, \_context ->
Logger.debug("About to execute #{changeset.action.name} on #{inspect(changeset.resource)}")

      changeset
    end)

### Ash.Resource.Change.Builtins.before_transaction/2 (macro)

Directly attach a `before_transaction` function to the current change.

See `Ash.Changeset.before_transaction/3` for more information.

Provide the option `prepend?: true` to place the hook before all other hooks instead of after.

### Example - Ash.Resource.Change.Builtins.before_transaction/2 (macro)

change before_transaction(fn changeset, \_context ->
Logger.debug("About to execute transaction for #{changeset.action.name} on #{inspect(changeset.resource)}")

      changeset
    end)

### Ash.Resource.Change.Builtins.cascade_destroy/2 (function)

Cascade this resource's destroy action to a related resource's destroy action.

Adds an after-action hook that explicitly calls destroy on any records related
via the named relationship. It will optimise for bulk destroys where
possible.

> #### Beware database constraints {: .warning}
>
> Think carefully before using this change with data layers which enforce
> referential integrity (ie PostgreSQL and SQLite) and you may need to defer
> constraints for the relationship in question.
>
> See also:
>
> 1. [`postgres.references.reference.deferrable` DSL](https://hexdocs.pm/ash_postgres/dsl-ashpostgres-datalayer.html#postgres-references-reference-deferrable)
> 2. [`sqlite.references.reference.deferrable` DSL](https://hexdocs.pm/ash_sqlite/dsl-ashsqlite-datalayer.html#sqlite-references-reference-deferrable)
> 3. [PostgreSQL's `SET CONSTRAINTS` documentation](https://www.postgresql.org/docs/current/sql-set-constraints.html)
> 4. [SQLite's `PRAGMA defer_foreign_keys` documentation](https://www.sqlite.org/pragma.html#pragma_defer_foreign_keys)

> #### Cascading notifications {: .tip}
>
> By default notifications are disabled for the related destroy. This is to avoid potentially sending a **lot** of notifications for high-cardinality relationships.

### Options - Ash.Resource.Change.Builtins.cascade_destroy/2 (function)

- `:relationship` (`t:atom/0`) - Required. The name of the relationship to work on

- `:action` (`t:atom/0`) - The name of the destroy action to call on the related resource. Uses the primary destroy by default.

- `:read_action` (`t:atom/0`) - The name of the read action to call on the related resource to find results to be destroyed

- `:return_notifications?` (`t:boolean/0`) - Return notifications for all destroyed records? The default value is `false`.

- `:after_action?` (`t:boolean/0`) - If true all the cascade destroys are done in after_action hooks. This makes it safe to use in atomic actions The default value is `true`.

- `:domain` (`Ash.Domain`) -

### Example - Ash.Resource.Change.Builtins.cascade_destroy/2 (function)

change cascade_destroy(:relationship)

### Ash.Resource.Change.Builtins.cascade_update/2 (function)

Cascade a resource's update action to a related resource's update action.

Adds an after-action hook that explicitly calls update on any records related
via the named relationship. It will optimise for bulk updates where
possible.

Allows you to copy fields from the arguments or changes to the destination,
this way you can cascade a bunch of changes downstream.

> #### Beware database constraints {: .warning}
>
> Think carefully before using this change with data layers which enforce
> referential integrity (ie PostgreSQL and SQLite) and you may need to defer
> constraints for the relationship in question.
>
> See also:
>
> 1. [`postgres.references.reference.deferrable` DSL](https://hexdocs.pm/ash_postgres/dsl-ashpostgres-datalayer.html#postgres-references-reference-deferrable)
> 2. [`sqlite.references.reference.deferrable` DSL](https://hexdocs.pm/ash_sqlite/dsl-ashsqlite-datalayer.html#sqlite-references-reference-deferrable)
> 3. [PostgreSQL's `SET CONSTRAINTS` documentation](https://www.postgresql.org/docs/current/sql-set-constraints.html)
> 4. [SQLite's `PRAGMA defer_foreign_keys` documentation](https://www.sqlite.org/pragma.html#pragma_defer_foreign_keys)

> #### Cascading notifications {: .tip}
>
> By default notifications are disabled for the related updates. This is to avoid potentially sending a **lot** of notifications for high-cardinality relationships.

### Options - Ash.Resource.Change.Builtins.cascade_update/2 (function)

- `:relationship` (`t:atom/0`) - Required. The name of the relationship to work on

- `:action` (`t:atom/0`) - The name of the update action to call on the related resource. Uses the primary update by default.

- `:copy_inputs` (list of `t:atom/0`) - A list of fields to copy & pass on to the downstream update. The source action cannot be atomic. The default value is `[]`.

- `:read_action` (`t:atom/0`) - The name of the read action to call on the related resource to find results to be updated

- `:return_notifications?` (`t:boolean/0`) - Return notifications for all updated records? The default value is `false`.

- `:domain` (`Ash.Domain`) -

### Example - Ash.Resource.Change.Builtins.cascade_update/2 (function)

change cascade_update(:relationship1)
change cascade_update(:relationship2, copy_inputs: [:field1, :field2])

### Ash.Resource.Change.Builtins.debug_log/1 (function)

### Ash.Resource.Change.Builtins.ensure_selected/1 (function)

Passes the provided value into `Ash.Changeset.ensure_selected/2`

If the value is not already selected, this makes sure it is. Does not deselect anything else.

### Example - Ash.Resource.Change.Builtins.ensure_selected/1 (function)

change ensure_selected([:necessary_field])

### Ash.Resource.Change.Builtins.filter/1 (function)

Applies a filter to the changeset. Has no effect for create actions.

This ensures that only things matching the provided filter are updated or destroyed.

### Ash.Resource.Change.Builtins.get_and_lock/2 (function)

Re-fetches the record being updated and locks it with the given type.

This happens in a `before_action` hook (so that it is done as part of the transaction).

If your resource has global validations (in the top level `validations` block), you may
want to add `delay_global_validations? true` to your action to ensure they happen on the
locked record.

### Options - Ash.Resource.Change.Builtins.get_and_lock/2 (function)

- `:skip_atomic?` - set to `true` to skip in the case that the update is done atomically. Defaults to `false`.

### Ash.Resource.Change.Builtins.get_and_lock_for_update/1 (function)

Re-fetches the record being updated and locks it for update.

Only usable with data layers that support locking `:for_update`.

This happens in a `before_action` hook (so that it is done as part of the transaction).

If your resource has global validations (in the top level `validations` block), you may
want to add `delay_global_validations? true` to your action to ensure they happen on the
locked record.

### Options - Ash.Resource.Change.Builtins.get_and_lock_for_update/1 (function)

- `:skip_atomic?` - set to `true` to skip in the case that the update is done atomically. Defaults to `false`.

### Ash.Resource.Change.Builtins.increment/2 (function)

Increments an attribute's value by the amount specified, which defaults to 1.

Options:

- `:amount` - Defaults to 1
- `:overflow_limit` - Defaults to `nil`. If the value is over the overflow limit it will roll-over to the amount being incremented by (for common database limit support)

### Ash.Resource.Change.Builtins.load/1 (function)

Passes the provided value into `Ash.load` after the action has completed.

### Example - Ash.Resource.Change.Builtins.load/1 (function)

change load(:comments)
change load([:friend_count, :friends])

### Ash.Resource.Change.Builtins.manage_relationship/3 (function)

Calls `Ash.Changeset.manage_relationship/4` with the changeset and relationship provided, using the value provided for the named argument.

If relationship_name is not specified, it is assumed to be the same as the argument.

For information on the available options, see `Ash.Changeset.manage_relationship/4`.

### Examples - Ash.Resource.Change.Builtins.manage_relationship/3 (function)

change manage_relationship(:comments, type: :append)
change manage_relationship(:remove_comments, :comments, type: :remove)

### Ash.Resource.Change.Builtins.optimistic_lock/1 (function)

Apply an "optimistic lock" on a record being updated or destroyed.

See `Ash.Resource.Change.OptimisticLock` for more.

### Ash.Resource.Change.Builtins.prevent_change/1 (function)

Clears a change off of the changeset before the action runs.

Does not fail if it is being changed, but ensures it is cleared just before the action.

Can be useful if a change is only used in validations but shouldn't ultimately be written to the data layer.

### Examples - Ash.Resource.Change.Builtins.prevent_change/1 (function)

change prevent_change(:email)

### Ash.Resource.Change.Builtins.relate_actor/2 (function)

Relates the actor to the data being changed, as the provided relationship.

### Options - Ash.Resource.Change.Builtins.relate_actor/2 (function)

- `:allow_nil?` (`t:boolean/0`) - Whether or not to allow the actor to be nil, in which case nothing will happen. The default value is `false`.

- `:field` (`t:atom/0`) - The field of the actor to set the relationship to

### Examples - Ash.Resource.Change.Builtins.relate_actor/2 (function)

change relate_actor(:owner, allow_nil?: true)

### Ash.Resource.Change.Builtins.select/1 (function)

Passes the provided value into `Ash.Changeset.select/3`

Keep in mind, this will _limit_ the fields that are selected. You may want `ensure_selected/1` if you
want to make sure that something is selected, without deselecting anything else.

Selecting in changesets does not actually do a select in the data layer. It nils out any
fields that were not selected after completing the action. This can be useful if you are writing
policies that have to do with specific fields being selected.

### Example - Ash.Resource.Change.Builtins.select/1 (function)

change select([:name])

### Ash.Resource.Change.Builtins.set_attribute/3 (function)

Sets the attribute to the value provided.

If a zero argument function is provided, it is called to determine the value.

Use `arg(:argument_name)` to use the value of the given argument. If the argument is not supplied then nothing happens.

### Options - Ash.Resource.Change.Builtins.set_attribute/3 (function)

- `:set_when_nil?` (`t:boolean/0`) - When false, decline setting the attribute if it is nil. The default value is `true`.

- `:new?` (`t:boolean/0`) - When true, sets the attribute to the value provided if the attribute is not already being changed. The default value is `false`.

### Examples - Ash.Resource.Change.Builtins.set_attribute/3 (function)

change set_attribute(:active, false)
change set_attribute(:opened_at, &DateTime.utc_now/0)
change set_attribute(:status, arg(:status))
change set_attribute(:encrypted_data, arg(:data), set_when_nil?: false)

### Ash.Resource.Change.Builtins.set_context/1 (function)

Merges the given query context.

If an MFA is provided, it will be called with the changeset.
The MFA should return `{:ok, context_to_be_merged}` or `{:error, term}`

### Examples - Ash.Resource.Change.Builtins.set_context/1 (function)

change set_context(%{something_used_internally: true})
change set_context({MyApp.Context, :set_context, []})

### Ash.Resource.Change.Builtins.set_new_attribute/2 (function)

Sets the attribute to the value provided if the attribute is not already being changed.

If a zero argument function is provided, it is called to determine the value.

Use `arg(:argument_name)` to use the value of the given argument. If the argument is not supplied then nothing happens.

### Examples - Ash.Resource.Change.Builtins.set_new_attribute/2 (function)

change set_new_attribute(:active, false)
change set_new_attribute(:opened_at, &DateTime.utc_now/0)
change set_new_attribute(:status, arg(:status))

### Ash.Resource.Change.Builtins.update_change/2 (macro)

Updates an existing attribute change by applying a function to it.

The update function gets called with the value already cast to the correct type, and only gets called
on valid changesets, so the value is guaranteed to have passed validations and constraints.

### Ash.Resource.Validation (behaviour)

Represents a validation in Ash.

See `Ash.Resource.Validation.Builtins` for a list of builtin validations.

To write your own validation, define a module that implements the `c:init/1` callback
to validate options at compile time, and `c:validate/3` callback to do the validation.

Then, in a resource, you can say:

```
validations do
  validate {MyValidation, [foo: :bar]}
end
```

### Ash.Resource.Validation.action_schema/0 (function)

### Ash.Resource.Validation.atomic/3 (callback)

### Ash.Resource.Validation.atomic?/0 (callback)

### Ash.Resource.Validation.describe/1 (callback)

### Ash.Resource.Validation.has_validate?/0 (callback)

### Ash.Resource.Validation.init/1 (callback)

### Ash.Resource.Validation.opt_schema/0 (function)

### Ash.Resource.Validation.path/0 (type)

### Ash.Resource.Validation.ref/0 (type)

### Ash.Resource.Validation.t/0 (type)

### Ash.Resource.Validation.validate/3 (callback)

### Ash.Resource.Validation.validation_type/0 (function)

### Ash.Resource.Validation.Builtins (module)

Built in validations that are available to all resources

The functions in this module are imported by default in the validations section.

### Ash.Resource.Validation.Builtins.absent/2 (function)

Validates that the given attribute or argument or list of attributes or arguments are `nil`.

This is the inverse of `present/2`.

Use options to specify how many must be `nil`. If no options are provided, validates that they are all absent.

Keep in mind that some types cast certain values to `nil`, and validations are
applied after all inputs have been cast. For example, a `:string` type attribute
with the default constraints will cast `""` as `nil`, meaning an input of
`""` would pass the `absent` validation.

### Options - Ash.Resource.Validation.Builtins.absent/2 (function)

- `:at_least` (`t:non_neg_integer/0`) - At least this many must be absent. Defaults to the number of attributes provided

- `:at_most` (`t:non_neg_integer/0`) - At most this many must be absent. Defaults to the number of attributes provided

- `:exactly` (`t:non_neg_integer/0`) - Exactly this many must be absent

### Examples - Ash.Resource.Validation.Builtins.absent/2 (function)

validate absent(:unsettable_option)

    validate absent([:first_name, :last_name]), where: [present(:full_name)]

    validate absent([:is_admin, :is_normal_user], at_least: 1)

### Ash.Resource.Validation.Builtins.action_is/1 (function)

Validates that the action name matches the provided action name or names. Primarily meant for use in `where`.

### Examples - Ash.Resource.Validation.Builtins.action_is/1 (function)

validate present(:foo), where: [action_is(:bar)]

    validate present(:foo), where: action_is([:bar, :baz])

### Ash.Resource.Validation.Builtins.argument_does_not_equal/2 (function)

Validates that an argument is not being changed to a specific value, or does not equal the given value if it is not being changed.

### Examples - Ash.Resource.Validation.Builtins.argument_does_not_equal/2 (function)

validate argument_does_not_equal(:admin, true)

    # Or to only check for changing to a given value
    validate argument_does_not_equal(:admin, true), where: [changing(:admin)]

### Ash.Resource.Validation.Builtins.argument_equals/2 (function)

Validates that an argument is being changed to a specific value, or equals the given value if it is not being changed.

### Examples - Ash.Resource.Validation.Builtins.argument_equals/2 (function)

validate argument_equals(:admin, true)

    # Or to only check for changing to a given value
    validate argument_equals(:admin, true), where: [changing(:admin)]

### Ash.Resource.Validation.Builtins.argument_in/2 (function)

Validates that an argument is being changed to one of a set of specific values, or is in the the given list if it is not being changed.

### Examples - Ash.Resource.Validation.Builtins.argument_in/2 (function)

validate argument_in(:state, [1, 2, 3])

    # Or to only check for changing to a something in a given list
    validate argument_in(:state, [1, 2, 3]), where: [changing(:state)]

### Ash.Resource.Validation.Builtins.attribute_does_not_equal/2 (function)

Validates that an attribute is not being changed to a specific value, or does not equal the given value if it is not being changed.

### Examples - Ash.Resource.Validation.Builtins.attribute_does_not_equal/2 (function)

validate attribute_does_not_equal(:admin, true)

    # Or to only check for changing to a given value
    validate attribute_does_not_equal(:admin, true), where: [changing(:admin)]

### Ash.Resource.Validation.Builtins.attribute_equals/2 (function)

Validates that an attribute is being changed to a specific value, or equals the given value if it is not being changed.

### Examples - Ash.Resource.Validation.Builtins.attribute_equals/2 (function)

validate attribute_equals(:admin, true)

    # Or to only check for changing to a given value
    validate attribute_equals(:admin, true), where: [changing(:admin)]

### Ash.Resource.Validation.Builtins.attribute_in/2 (function)

Validates that an attribute is being changed to one of a set of specific values, or is in the the given list if it is not being changed.

### Examples - Ash.Resource.Validation.Builtins.attribute_in/2 (function)

validate attribute_in(:state, [1, 2, 3])

    # Or to only check for changing to a something in a given list
    validate attribute_in(:state, [1, 2, 3]), where: [changing(:state)]

### Ash.Resource.Validation.Builtins.attributes_absent/2 (function)

Validates that the attribute or list of attributes are `nil`. See `absent/2` for more information.

### Options - Ash.Resource.Validation.Builtins.attributes_absent/2 (function)

- `:at_least` (`t:non_neg_integer/0`) - At least this many must be absent. Defaults to the number of attributes provided

- `:at_most` (`t:non_neg_integer/0`) - At most this many must be absent. Defaults to the number of attributes provided

- `:exactly` (`t:non_neg_integer/0`) - Exactly this many must be absent

### Ash.Resource.Validation.Builtins.attributes_present/2 (function)

Validates that the attribute or list of attributes are not `nil`. See `present/2` for more information.

### Options - Ash.Resource.Validation.Builtins.attributes_present/2 (function)

- `:at_least` (`t:non_neg_integer/0`) - At least this many must be present. Defaults to the number of attributes provided

- `:at_most` (`t:non_neg_integer/0`) - At most this many must be present. Defaults to the number of attributes provided

- `:exactly` (`t:non_neg_integer/0`) - Exactly this many must be present

### Ash.Resource.Validation.Builtins.changing/2 (function)

Validates that an attribute or relationship is being changed

### Examples - Ash.Resource.Validation.Builtins.changing/2 (function)

validate changing(:first_name)
validate changing(:comments)
validate changing(:comments, touching?: true)

### Options - Ash.Resource.Validation.Builtins.changing/2 (function)

- `:field` (`t:atom/0`) - Required. The attribute or relationship to check for changes. Using a relationship does not compare old and new value, returning `true` if the value is being touched)

- `:touching?` (`t:atom/0`) - Whether to consider a field as changing if it is just being touched (i.e consider it changed even if it is being changed to its current value) The default value is `false`.

### Ash.Resource.Validation.Builtins.compare/2 (function)

Validates that an attribute or argument meets the given comparison criteria.

The values provided for each option may be a literal value, attribute, argument, or a zero argument function.

### Options - Ash.Resource.Validation.Builtins.compare/2 (function)

- `:greater_than` - The value that the attribute should be greater than.

- `:greater_than_or_equal_to` - The value that the attribute should be greater than or equal to

- `:less_than` - The value that the attribute should be less than

- `:less_than_or_equal_to` - The value that the attribute should be less than or equal to

- `:is_equal` - The value that the attribute should be equal to

- `:is_not_equal` - The value that the attribute should not be equal to

- `:is_nil` (`t:boolean/0`) - Whether the attribute should be nil (true) or not nil (false)

### Examples - Ash.Resource.Validation.Builtins.compare/2 (function)

validate compare(:age, greater_than_or_equal_to: 18),
where: [attribute_equals(:show_adult_content, true)],
message: "must be over %{greater_than_or_equal_to} to enable adult content."

    validate compare(:points, greater_than: 0, less_than_or_equal_to: 100)

### Ash.Resource.Validation.Builtins.confirm/2 (function)

Validates that a field or argument matches another field or argument

### Examples - Ash.Resource.Validation.Builtins.confirm/2 (function)

validate confirm(:password, :password_confirmation)
validate confirm(:email, :email_confirmation)

### Ash.Resource.Validation.Builtins.match/2 (function)

Validates that an attribute's value matches a given regex.

`String.match?/2` is used to determine if the value matches.

### Examples - Ash.Resource.Validation.Builtins.match/2 (function)

validate match(:slug, ~r/^[0-9a-z-_]+$/)

### Ash.Resource.Validation.Builtins.negate/1 (function)

Validates that other validation does not pass

### Examples - Ash.Resource.Validation.Builtins.negate/1 (function)

validate negate(one_of(:status, [:closed, :finished]))

### Ash.Resource.Validation.Builtins.numericality/2 (function)

Validates that an attribute or argument meets the given comparison criteria.

The values provided for each option may be a literal value, attribute, argument, or a zero argument function.

### Options - Ash.Resource.Validation.Builtins.numericality/2 (function)

- `:greater_than` - The value that the attribute should be greater than.

- `:greater_than_or_equal_to` - The value that the attribute should be greater than or equal to

- `:less_than` - The value that the attribute should be less than

- `:less_than_or_equal_to` - The value that the attribute should be less than or equal to

- `:is_equal` - The value that the attribute should be equal to

- `:is_not_equal` - The value that the attribute should not be equal to

- `:is_nil` (`t:boolean/0`) - Whether the attribute should be nil (true) or not nil (false)

### Examples - Ash.Resource.Validation.Builtins.numericality/2 (function)

validate numericality(:age, greater_than_or_equal_to: 18),
where: [attribute_equals(:show_adult_content, true)],
message: "must be over %{greater_than_or_equal_to} to enable adult content."

    validate numericality(:points, greater_than: 0, less_than_or_equal_to: 100)

### Ash.Resource.Validation.Builtins.one_of/2 (function)

Validates that an attribute's value is in a given list

### Examples - Ash.Resource.Validation.Builtins.one_of/2 (function)

validate one_of(:status, [:closed_won, :closed_lost])

### Ash.Resource.Validation.Builtins.present/2 (function)

Validates that the given attribute or argument or list of attributes or arguments are not `nil`.

Use options to specify how many must not be `nil`. If no options are provided, validates that they are all present.

Keep in mind that some types cast certain values to `nil`, and validations are
applied after all inputs have been cast. For example, a `:string` type attribute
with the default constraints will cast `""` as `nil`, meaning an input of
`""` would fail the `present` validation.

### Options - Ash.Resource.Validation.Builtins.present/2 (function)

- `:at_least` (`t:non_neg_integer/0`) - At least this many must be present. Defaults to the number of attributes provided

- `:at_most` (`t:non_neg_integer/0`) - At most this many must be present. Defaults to the number of attributes provided

- `:exactly` (`t:non_neg_integer/0`) - Exactly this many must be present

### Examples - Ash.Resource.Validation.Builtins.present/2 (function)

validate present(:name)

    validate present([:first_name, :last_name]), where: [absent(:full_name)]

    validate present([:is_admin, :is_normal_user], at_most: 1)

### Ash.Resource.Validation.Builtins.string_length/2 (function)

Validates that an attribute on the original record meets the given length criteria

### Options - Ash.Resource.Validation.Builtins.string_length/2 (function)

- `:min` (`t:non_neg_integer/0`) - String must be this length at least

- `:max` (`t:non_neg_integer/0`) - String must be this length at most

- `:exact` (`t:non_neg_integer/0`) - String must be this length exactly

### Examples - Ash.Resource.Validation.Builtins.string_length/2 (function)

validate string_length(:slug, exact: 8)
validate string_length(:password, min: 6)
validate string_length(:secret, min: 4, max: 12)

### Ash.Authorizer (behaviour)

The interface for an ash authorizer

These will typically be implemented by an extension, but a custom
one can be implemented by defining an extension that also adopts this behaviour.

Then you can extend a resource with `authorizers: [YourAuthorizer]`

### Ash.Authorizer.add_calculations/3 (callback)

### Ash.Authorizer.add_calculations/4 (function)

### Ash.Authorizer.alter_filter/3 (callback)

### Ash.Authorizer.alter_filter/4 (function)

### Ash.Authorizer.alter_results/3 (callback)

### Ash.Authorizer.alter_results/4 (function)

### Ash.Authorizer.alter_sort/4 (function)

### Ash.Authorizer.check/2 (callback)

### Ash.Authorizer.check/3 (function)

### Ash.Authorizer.check_context/1 (callback)

### Ash.Authorizer.check_context/2 (function)

### Ash.Authorizer.context/0 (type)

### Ash.Authorizer.exception/2 (callback)

### Ash.Authorizer.exception/3 (function)

### Ash.Authorizer.initial_state/4 (callback)

### Ash.Authorizer.initial_state/5 (function)

### Ash.Authorizer.state/0 (type)

### Ash.Authorizer.strict_check/2 (callback)

### Ash.Authorizer.strict_check/3 (function)

### Ash.Authorizer.strict_check_context/1 (callback)

### Ash.Authorizer.strict_check_context/2 (function)

### Ash.Policy.Check (behaviour)

A behaviour for declaring checks, which can be used to easily construct
authorization rules.

If a check can be expressed simply, i.e as a function of the actor, or the context of the request,
see `Ash.Policy.SimpleCheck` for an easy way to write that check.
If a check can be expressed with a filter statement, see `Ash.Policy.FilterCheck`
for an easy way to write that check.

### Ash.Policy.Check.actor/0 (type)

### Ash.Policy.Check.authorizer/0 (type)

### Ash.Policy.Check.auto_filter/3 (callback)

An optional callback, that allows the check to work with policies set to `access_type :filter`

Return a keyword list filter that will be applied to the query being made, and will scope the results to match the rule

### Ash.Policy.Check.check/4 (callback)

An optional callback, that allows the check to work with policies set to `access_type :runtime`

Takes a list of records, and returns the subset of authorized records.

### Ash.Policy.Check.check_type/0 (type)

### Ash.Policy.Check.defines_auto_filter?/1 (function)

### Ash.Policy.Check.defines_check?/1 (function)

### Ash.Policy.Check.describe/1 (callback)

Describe the check in human readable format, given the options

### Ash.Policy.Check.eager_evaluate?/0 (callback)

### Ash.Policy.Check.expand_description/3 (callback)

Expands the description of the check, given the actor and subject

### Ash.Policy.Check.options/0 (type)

### Ash.Policy.Check.prefer_expanded_description?/0 (callback)

Whether or not the expanded description should replace the basic description in breakdowns

### Ash.Policy.Check.ref/0 (type)

### Ash.Policy.Check.requires_original_data?/2 (callback)

Whether or not your check requires the original data of a changeset (if applicable)

### Ash.Policy.Check.strict_check/3 (callback)

Strict checks should be cheap, and should never result in external calls (like database or domain)

It should return `{:ok, true}` if it can tell that the request is authorized, and `{:ok, false}` if
it can tell that it is not. If unsure, it should return `{:ok, :unknown}`

### Ash.Policy.Check.t/0 (type)

### Ash.Policy.Check.type/0 (callback)

The type of the check

`:manual` checks must be written by hand as standard check modules
`:filter` checks can use `Ash.Policy.FilterCheck` for simplicity
`:simple` checks can use `Ash.Policy.SimpleCheck` for simplicity

### Ash.Policy.FilterCheck (behaviour)

A type of check that is represented by a filter statement

You can customize what the "negative" filter looks like by defining `c:reject/3`. This is important for
filters over related data. For example, given an `owner` relationship and a data layer like `ash_postgres`
where `column != NULL` does _not_ evaluate to true (see postgres docs on NULL for more):

    # The opposite of
    `owner.id == 1`
    # in most cases is not
    `not(owner.id == 1)`
    # because in postgres that would be `NOT (owner.id = NULL)` in cases where there was no owner
    # A better opposite would be
    `owner.id != 1 or is_nil(owner.id)`
    # alternatively
    `not(owner.id == 1) or is_nil(owner.id)`

By being able to customize the `reject` filter, you can use related filters in your policies. Without it,
they will likely have undesired effects.

### Ash.Policy.FilterCheck.context/0 (type)

### Ash.Policy.FilterCheck.filter/3 (callback)

### Ash.Policy.FilterCheck.is_filter_check?/1 (function)

### Ash.Policy.FilterCheck.options/0 (type)

### Ash.Policy.FilterCheck.reject/3 (callback)

### Ash.Policy.SimpleCheck (behaviour)

A type of check that operates only on request context, never on the data

Define `c:match?/3`, which gets the actor, request context, and opts, and returns true or false

### Example - Ash.Policy.SimpleCheck (behaviour)

This is a simple check that checks if the user is changing anything other than the
provided list.

```elixir
defmodule ChangingNothingExcept do
  use Ash.Policy.SimpleCheck

  def match?(_actor, %{subject: %Ash.Changeset{} = changeset}, opts) do
    allowed = opts[:attributes]
    {:ok, Enum.all?(Map.keys(changeset.attributes), &(&1 in allowed))}
  end

  def match?(_, _, _), do: {:ok, true}
end
```

You could then use this like

```elixir
policy actor_attribute_equals(:role, :foobar) do
  authorize_if {ChangingNothingExcept, attributes: [:foo, :bar]}
end
```

### Ash.Policy.SimpleCheck.actor/0 (type)

### Ash.Policy.SimpleCheck.context/0 (type)

### Ash.Policy.SimpleCheck.match?/3 (callback)

Whether or not the request matches the check

### Ash.Policy.SimpleCheck.options/0 (type)

### Ash.Policy.Check.Builtins (module)

The global authorization checks built into ash

### Ash.Policy.Check.Builtins.accessing_from/2 (function)

This check is true when the current action is being run "through" a relationship.

Cases where this happens:

1. Loading related data
2. Managing relationships
3. Aggregating data
4. Filtering on relationships

### Ash.Policy.Check.Builtins.action/1 (function)

This check is true when the action name matches the provided action name or names.

This is a very common pattern, allowing action-specific policies.

### Ash.Policy.Check.Builtins.action_type/1 (function)

This check is true when the action type matches the provided type

This is useful for writing policies that apply to all actions of a given type.

For example:

```elixir
policy action_type(:read) do
  authorize_if relates_to_actor_via(:owner)
end
```

### Ash.Policy.Check.Builtins.actor_absent/0 (function)

This check is false when there is an actor specified, and true when the actor is `nil`.

### Ash.Policy.Check.Builtins.actor_attribute_equals/2 (function)

This check is true when the value of the specified attribute of the actor equals the specified value.

This check will _never_ pass if the actor does not have the specified key. For example,
`actor_attribute_equals(:missing_key, nil)`

### Ash.Policy.Check.Builtins.actor_present/0 (function)

This check is true when there is an actor specified, and false when the actor is `nil`.

### Ash.Policy.Check.Builtins.always/0 (function)

This check always passes.

Can be useful for "deny-list" style authorization. For example:

```elixir
policy action_type(:read) do
  forbid_if actor_attribute_equals(:disabled, true)
  forbid_if actor_attribute_equals(:active, false)
  authorize_if always()
end
```

Without that last clause, the policy would never pass.

### Ash.Policy.Check.Builtins.changing_attributes/1 (function)

This check is true when attribute changes correspond to the provided options.

Provide a keyword list of options or just an atom representing the attribute.

For example:

```elixir
# if you are changing both first name and last name
changing_attributes([:first_name, :last_name])

# if you are changing first name to fred
changing_attributes(first_name: [to: "fred"])

# if you are changing last name from bob
changing_attributes(last_name: [from: "bob"])

# if you are changing :first_name at all, last_name from "bob" and middle name from "tom" to "george"
changing_attributes([:first_name, last_name: [from: "bob"], middle_name: [from: "tom", to: "george]])
```

### Ash.Policy.Check.Builtins.changing_relationship/1 (function)

This check is true when the specified relationship is changing

### Ash.Policy.Check.Builtins.changing_relationships/1 (function)

This check is true when the specified relationships are changing

### Ash.Policy.Check.Builtins.context_equals/2 (function)

This check is true when the value of the specified key or path in the changeset or query context equals the specified value.

Note that the context is not shared with other queries (e.g. loads).

For example:

```elixir
# Given this check on Profile
authorize_if context_equals(:allow_this?, true)

# This load will not have the context and will not be authorized
Ash.load!(user, :profile, context: %{allow_this?: true})

# But this will have the context and will be authorized
Ash.load!(user, [profile: Ash.Query.set_context(Profile, %{allow_this?: true})])
```

### Ash.Policy.Check.Builtins.filtering_on/2 (function)

This check is true when the field provided is being referenced anywhere in a filter statement.

This applies to related filters as well. For example:

```elixir
policy actor_attribute_equals(:is_admin, false) do
  forbid_if filtering_on(:email)
  # a path can be provided as well
  forbid_if filtering_on([:owner], :email)
end
```

The first will return true in situations like:

```elixir
Ash.Query.filter(User, email == "blah")
Ash.Query.filter(Tweet, author.email == "blah")
```

The second will return true on queries like:

```elixir
Ash.Query.filter(Post, owner.email == "blah")
Ash.Query.filter(Comment, post.owner.email == "blah")
```

### Ash.Policy.Check.Builtins.just_created_with_action/1 (function)

### Ash.Policy.Check.Builtins.loading/1 (function)

This check is true when the field or relationship, or path to field, is being loaded and false when it is not.

This is always false for `create`/`update`/`destroy` actions, because you cannot load fields on those action types.

### Ash.Policy.Check.Builtins.matches/2 (macro)

This check is true when the specified function returns true

### Ash.Policy.Check.Builtins.never/0 (function)

This check never passes.

There is, generally speaking, no reason to use this, but it exists for
completeness sake.

### Ash.Policy.Check.Builtins.relates_to_actor_via/2 (function)

This check passes if the data relates to the actor via the specified relationship or path of relationships.

For `update` & `destroy` actions, this check will apply to _the original data_ before the changes are applied.

For `create` actions this check is very unlikely to pass. This is because relationships are modified _after_ authorization
happens, not before.

For example:

```elixir
policy action_type(:read) do
  authorize_if relates_to_actor_via(:owner)

  # Path of relationships:
  authorize_if relates_to_actor_via([:account, :user])

  # When the resource relates to a field of the actor:
  authorize_if relates_to_actor_via(:roles, field: :role)
end
```

### Ash.Policy.Check.Builtins.relating_to_actor/1 (function)

This check is true when the specified relationship is being changed to the current actor.

This only supports `belongs_to` relationships at the moment, and will detect two cases:

1. the `source_attribute` is being changed directly
2. the relationship is being changed with `on_lookup?: :relate`, and a single input is being provided.

### Ash.Policy.Check.Builtins.resource/1 (function)

This check is true when the resource name matches the provided resource name or names.

### Ash.Policy.Check.Builtins.selecting/1 (function)

This check is true when the field is being selected and false when it is not.

This won't affect filters placed on this resource, so you may also want to either:

- Mark the given field as `filterable? false`
- Add another check for `filtering_on(:field)`

For example:

```elixir
policy action_type(:read) do
  # The actor can read and filter on their own email
  authorize_if expr(id == ^actor(:id))

  # No one else can select or filter on their email
  forbid_if selecting(:email)
  forbid_if filtering_on(:email)

  # Otherwise, the policy passes
  authorize_if always()
end
```

### Ash.DataLayer.Ets (module)

An ETS (Erlang Term Storage) backed Ash Datalayer, for testing and lightweight usage.

Remember, this does not have support for transactions! This is not recommended for production
use, especially in multi-user applications. It can, however, be great for prototyping.

### Ash.DataLayer.Ets.do_add_calculations/4 (function)

### Ash.DataLayer.Ets.ets/1 (macro)

### Ash.DataLayer.Ets.stop/2 (function)

Stops the storage for a given resource/tenant (deleting all of the data)

### Ash.DataLayer.Mnesia (module)

An Mnesia backed Ash Datalayer.

In your application initialization, you will need to call `Mnesia.create_schema([node()])`.

Additionally, you will want to create your mnesia tables there.

This data layer is _unoptimized_, fetching all records from a table and filtering them
in memory. For that reason, it is not recommended to use it with large amounts of data. It can be
great for prototyping or light usage, though.

### Ash.DataLayer.Mnesia.mnesia/1 (macro)

### Ash.DataLayer.Mnesia.start/2 (function)

Creates the table for each mnesia resource in a domain

### Ash.DataLayer.Simple (module)

A data layer that returns structs.

This is the data layer that is used under the hood
by embedded resources, and resources without data layers.

### Ash.DataLayer.Simple.bulk_create/3 (function)

Callback implementation for Ash.DataLayer.bulk_create/3 .

### Ash.DataLayer.Simple.set_data/2 (function)

Sets the data for a query against a data-layer-less resource

### Ash.Notifier.PubSub (module)

A builtin notifier to help you publish events over any kind of pub-sub tooling.

This is plug and play with `Phoenix.PubSub`, but could be used with any pubsub system.

You configure a module that defines a `broadcast/3` function, and then add some "publications"
which configure under what conditions an event should be sent and what the topic should be.

### Example - Ash.Notifier.PubSub (module)

```elixir
defmodule MyApp.User do
  use Ash.Resource,
    # ...
    notifiers: [Ash.Notifier.PubSub]

  # ...

  pub_sub do
    module MyAppWeb.Endpoint

    prefix "user"
    publish :update, ["updated", :_pkey]
  end
end
```

### Debugging PubSub - Ash.Notifier.PubSub (module)

It can be quite frustrating when setting up pub_sub when everything appears to be set up properly, but
you aren't receiving events. This usually means some kind of mismatch between the event names produced
by the resource/config of your publications, and you can use the following flag to display debug
information about all pub sub events.

```elixir
config :ash, :pub_sub, debug?: true
```

### Topic Templates - Ash.Notifier.PubSub (module)

Often you want to include some piece of data in the thing being changed, like the `:id` attribute. This
is done by providing a list as the topic, and using atoms which will be replaced by their corresponding
values. They will ultimately be joined with `:`.

For example:

```elixir
prefix "user"

publish :create, ["created", :user_id]
```

This might publish a message to "user:created:1" for example.

For updates, if the field in the template is being changed, a message is sent
to _both_ values. So if you change `user 1` to `user 2`, the same message would
be published to `user:updated:1` and `user:updated:2`. If there are multiple
attributes in the template, and they are all being changed, a message is sent for
every combination of substitutions.

### Important - Ash.Notifier.PubSub (module)

If the previous value was `nil` or the field was not selected on the data passed into the action, then a
notification is not sent for the previous value.

If the new value is `nil` then a notification is not sent for the new value.

### Template parts - Ash.Notifier.PubSub (module)

Templates may contain lists, in which case all combinations of values in the list will be used. Add
`nil` to the list if you want to produce a pattern where that entry is omitted.

The atom `:_tenant` may be used. If the changeset has a tenant set on it, that
value will be used, otherwise that combination of values is ignored.

The atom `:_pkey` may be used. It will be a stringified, concatenation of the primary key fields,
or just the primary key if there is only one primary key field.

The atom `nil` may be used. It only makes sense to use it in the context of a list of alternatives,
and adds a pattern where that part is skipped.

```elixir
publish :updated, [[:team_id, :_tenant], "updated", [:id, nil]]
```

Would produce the following messages, given a `team_id` of 1, a `tenant` of `org_1`, and an `id` of `50`:

```elixir
"1:updated:50"
"1:updated"
"org_1:updated:50"
"org_1:updated"
```

### Custom Delimiters - Ash.Notifier.PubSub (module)

It's possible to change the default delimiter used when generating topics. This is useful when working with message brokers
like RabbitMQ, which rely on a different set of delimiters for routing.

```elixir
pub_sub do
  delimiter "."
end
```

### Named Pubsub modules - Ash.Notifier.PubSub (module)

If you are using a phoenix `Endpoint` module for pubsub then this is unnecessary. If you want to use a custom pub sub started
with something like `{Phoenix.PubSub, name: MyName}`, then you can provide `MyName` to here.

### Broadcast Types - Ash.Notifier.PubSub (module)

Configured with `broadcast_type`.

- `:notification` just sends the notification
- `:phoenix_broadcast` sends a `%Phoenix.Socket.Broadcast{}` (see above)
- `:broadcast` sends `%{topic: (topic), event: (event), payload: (notification)}`

### Ash.Notifier.PubSub.pub_sub/1 (macro)

### Ash.Notifier.PubSub.to_payload/4 (function)

### Ash.Policy.Authorizer (module)

An authorization extension for ash resources.

To add this extension to a resource, add it to the list of `authorizers` like so:

```elixir
use Ash.Resource,
  ...,
  authorizers: [
    Ash.Policy.Authorizer
  ]
```

A resource can be given a set of policies, which are enforced on each call to a resource action.

For reads, policies can be configured to filter out data that the actor shouldn't see, as opposed to
resulting in a forbidden error.

See the [policies guide](/documentation/topics/security/policies.md) for practical examples.

Policies are solved/managed via a boolean satisfiability solver. To read more about boolean satisfiability,
see this page: https://en.wikipedia.org/wiki/Boolean_satisfiability_problem. At the end of
the day, however, it is not necessary to understand exactly how Ash takes your
authorization requirements and determines if a request is allowed. The
important thing to understand is that Ash may or may not run any/all of your
authorization rules as they may be deemed unnecessary. As such, authorization
checks should have no side effects. Ideally, the checks built-in to ash should
cover the bulk of your needs.

### Ash.Policy.Authorizer.alter_sort/3 (function)

### Ash.Policy.Authorizer.expr_check/1 (function)

### Ash.Policy.Authorizer.field_policies/1 (macro)

### Ash.Policy.Authorizer.install/5 (function)

### Ash.Policy.Authorizer.policies/1 (macro)

### Ash.Policy.Authorizer.print_tuple_boolean/1 (function)

### Ash.Policy.Authorizer.t/0 (type)

### Ash.Policy.Authorizer.template_var/1 (function)

### Ash.Reactor (module)

`Ash.Reactor` is a [`Reactor`](https://hex.pm/packages/reactor) extension
which provides steps for working with Ash resources and actions.

See the [Ash Reactor Guide](https://hexdocs.pm/ash/reactor.html) for more
information.

### Ash.Reactor.action/0 (type)

### Ash.Reactor.ash/1 (macro)

### Ash.Resource (module)

A resource is a static definition of an entity in your system.

[Resource DSL documentation](dsl-ash-resource.html)

### Options - Ash.Resource (module)

- `:simple_notifiers` (list of module that adopts `Ash.Notifier`) - Notifiers with no DSL.

- `:validate_domain_inclusion?` (`t:boolean/0`) - Whether or not to validate that this resource is included in a domain. The default value is `true`.

- `:primary_read_warning?` (`t:boolean/0`) - Set to `false` to silence warnings about arguments, preparations and filters on the primary read action. The default value is `true`.

- `:domain` (module that adopts `Ash.Domain`) - The domain to use when interacting with this resource. Also sets defaults for various options that ask for a domain.

- `:embed_nil_values?` (`t:boolean/0`) - Whether or not to include keys with `nil` values in an embedded representation. Has no effect unless resource is an embedded resource. The default value is `true`.

- `:extensions` (list of module that adopts `Spark.Dsl.Extension`) - A list of DSL extensions to add to the `Spark.Dsl`

- `:data_layer` (module that adopts `Ash.DataLayer`) - data_layer extensions to add to the `Spark.Dsl` The default value is `Ash.DataLayer.Simple`.

- `:authorizers` (one or a list of module that adopts `Ash.Authorizer`) - authorizers extensions to add to the `Spark.Dsl` The default value is `[]`.

- `:notifiers` (one or a list of module that adopts `Ash.Notifier`) - notifiers extensions to add to the `Spark.Dsl` The default value is `[]`.

- `:otp_app` (`t:atom/0`) - The otp_app to use for any application configurable options

- `:fragments` (list of `t:module/0`) - Fragments to include in the `Spark.Dsl`. See the fragments guide for more.

### Ash.Resource.get_metadata/2 (function)

### Ash.Resource.loaded?/3 (function)

Returns true if the load or path to load has been loaded

### Options - Ash.Resource.loaded?/3 (function)

- `lists`: set to `:any` to have this return true if any record in a list that appears has the value loaded. Default is `:all`.
- `unknown`: set to `true` to have unknown paths (like nil values or non-resources) return true. Defaults to `false`
- `strict?`: set to `true` to return false if a calculation with arguments is being checked

### Ash.Resource.put_metadata/3 (function)

### Ash.Resource.record/0 (type)

### Ash.Resource.selected?/3 (function)

Returns true if the given field has been selected on a record

### Options - Ash.Resource.selected?/3 (function)

- `forbidden_means_selected?`: set to `true` to return `true` if the field is marked as forbidden

### Ash.Resource.set_metadata/2 (function)

### Ash.Resource.t/0 (type)

### Ash.Resource.unload/2 (function)

Sets a loaded key or path to a key back to its original unloaded stated

### Ash.Resource.unload_many/2 (function)

Sets a list of loaded key or paths to a key back to their original unloaded stated

### Ash.DataLayer.Ets.Info (module)

Introspection helpers for the Ets data layer

### Ash.DataLayer.Ets.Info.private?/1 (function)

Whether or not the ets table for the resource should be private

### Ash.DataLayer.Ets.Info.table/1 (function)

The ets table name for a resource

### Ash.DataLayer.Mnesia.Info (module)

Introspection helpers for Ash.DataLayer.Mnesia

### Ash.DataLayer.Mnesia.Info.table/1 (function)

The mnesia table for a resource

### Ash.Domain.Dsl.ResourceReference (module)

A resource reference in a domain

### Ash.Domain.Dsl.ResourceReference.t/0 (type)

### Ash.Domain.Info (module)

Introspection tools for Ash.Domain

### Ash.Domain.Info.allow/1 (function)

The allow MFA for a domain

### Ash.Domain.Info.allow_unregistered?/1 (function)

Whether or not the domain allows unregistered resources to be used with it

### Ash.Domain.Info.authorize/1 (function)

When authorization should happen for a given domain

### Ash.Domain.Info.depend_on_resources/1 (macro)

Gets the resources of a domain module. Can be used at compile time.

Liberal use of this can greatly increase compile times, or even cause compiler deadlocks.
Use with care.

### Ash.Domain.Info.description/1 (function)

The description of the domain

### Ash.Domain.Info.find_manage_relationships_with_identity_not_configured/1 (function)

### Ash.Domain.Info.related_domain/3 (function)

Determine what domain to use when interacting with a related resource.

We choose the first domain found in the following order:

- `relationship.domain`, i.e an explicitly configured domain for a relationship
- `resource.domain`, i.e. the domain the resource declares
- `subject.domain`, i.e. the domain of the query, changeset or action input (if it has one)
- `default`, the default domain provided as the third argument

### Ash.Domain.Info.require_actor?/1 (function)

Whether or not the actor is always required for a domain

### Ash.Domain.Info.resource/2 (function)

Returns `{:ok, resource}` if the resource can be used by the domain, or `{:error, error}`.

### Ash.Domain.Info.resource_references/1 (function)

Gets the resource references of a domain module. DO NOT USE AT COMPILE TIME.

If you need the resource list at compile time, use `depend_on_resources/1`

### Ash.Domain.Info.resources/1 (function)

Gets the resources of a domain module.

### Ash.Domain.Info.short_name/1 (function)

The short name for a domain

### Ash.Domain.Info.span_name/3 (function)

The span_name for a domain and resource combination

### Ash.Domain.Info.telemetry_event_name/2 (function)

Names a telemetry event for a given domain/resource combo

### Ash.Domain.Info.timeout/1 (function)

The execution timeout for a domain

### Ash.Domain.Info.trace_name/1 (function)

The trace name for a domain

### Ash.Notifier.PubSub.Info (module)

Introspection helpers for Ash.Notifier.PubSub

### Ash.Notifier.PubSub.Info.broadcast_type/1 (function)

The broadcast type for a resource

### Ash.Notifier.PubSub.Info.delimiter/1 (function)

The delimiter to use when generating message topics

### Ash.Notifier.PubSub.Info.filter/1 (function)

The pubsub filter for a resource

### Ash.Notifier.PubSub.Info.module/1 (function)

The pubsub module for a resource

### Ash.Notifier.PubSub.Info.name/1 (function)

The pubsub name for a resource

### Ash.Notifier.PubSub.Info.prefix/1 (function)

The topic prefix for a resource

### Ash.Notifier.PubSub.Info.publications/1 (function)

The list of publications for a resource

### Ash.Notifier.PubSub.Info.transform/1 (function)

The transform for a resource

### Ash.Notifier.PubSub.Publication (module)

Represents a configured publication from the pubsub notifier on an Ash.Resource

### Ash.Notifier.PubSub.Publication.publish_all_schema/0 (function)

### Ash.Notifier.PubSub.Publication.schema/0 (function)

### Ash.Policy.FieldPolicy (module)

Represents a field policy in an Ash.Resource

### Ash.Policy.FieldPolicy.t/0 (type)

### Ash.Policy.Info (module)

An authorization extension for ash resources.

For more information, see `Ash.Policy.Authorizer`

### Ash.Policy.Info.default_access_type/1 (function)

### Ash.Policy.Info.describe_resource/2 (function)

### Ash.Policy.Info.field_policies/1 (function)

### Ash.Policy.Info.field_policies_for_field/2 (function)

Gets the field policies relevant to a given field

### Ash.Policy.Info.log_policy_breakdowns/0 (function)

The log level at which Ash policy authorizer logs policy breakdowns. Defaults to none.

### Ash.Policy.Info.log_successful_policy_breakdowns/0 (function)

The log level at which Ash policy authorizer logs successful policy breakdowns. Defaults to none.

### Ash.Policy.Info.policies/2 (function)

### Ash.Policy.Info.private_fields_policy/1 (function)

### Ash.Policy.Info.show_policy_breakdowns?/0 (function)

Whether or not Ash policy authorizer is configured to show policy breakdowns in error messages

### Ash.Policy.Info.strict_check/3 (function)

A utility to determine if a given query/changeset would pass authorization.

_This is still experimental._

### Ash.Policy.Policy (module)

Represents a policy on an Ash.Resource

### Ash.Policy.Policy.at_least_one_policy_expression/1 (function)

### Ash.Policy.Policy.fetch_fact/2 (function)

### Ash.Policy.Policy.fetch_or_strict_check_fact/2 (function)

### Ash.Policy.Policy.solve/1 (function)

### Ash.Policy.Policy.t/0 (type)

### Ash.Resource.Actions (module)

Types for Ash actions

### Ash.Resource.Actions.action/0 (type)

### Ash.Resource.Actions.action_type/0 (type)

### Ash.Resource.Actions.Action (module)

Represents a custom action on a resource.

### Ash.Resource.Actions.Action.t/0 (type)

### Ash.Resource.Actions.Action.transform/1 (function)

### Ash.Resource.Actions.Argument (module)

Represents an argument to an action

### Ash.Resource.Actions.Argument.schema/0 (function)

### Ash.Resource.Actions.Argument.t/0 (type)

### Ash.Resource.Actions.Create (module)

Represents a create action on a resource.

### Ash.Resource.Actions.Create.t/0 (type)

### Ash.Resource.Actions.Destroy (module)

Represents a destroy action on a resource.

### Ash.Resource.Actions.Destroy.t/0 (type)

### Ash.Resource.Actions.Destroy.transform/1 (function)

### Ash.Resource.Actions.Implementation (behaviour)

An implementation of a [generic action](generic-actions.md).

### Example - Ash.Resource.Actions.Implementation (behaviour)

```
defmodule YourModule do
  use Ash.Resource.Actions.Implementation

  def run(input, opts, context) do
    {:ok, "Hello"}
  end
end
```

### Ash.Resource.Actions.Implementation.run/3 (callback)

### Ash.Resource.Actions.Implementation.Context (module)

The context passed into generic action functions

### Ash.Resource.Actions.Implementation.Context.t/0 (type)

### Ash.Resource.Actions.Metadata (module)

Represents metadata from an action

### Ash.Resource.Actions.Metadata.schema/0 (function)

### Ash.Resource.Actions.Metadata.t/0 (type)

### Ash.Resource.Actions.Read (module)

Represents a read action on a resource.

### Ash.Resource.Actions.Read.pagination_schema/0 (function)

### Ash.Resource.Actions.Read.t/0 (type)

### Ash.Resource.Actions.Read.transform/1 (function)

### Ash.Resource.Actions.Read.Pagination (module)

Represents the pagination configuration of a read action

### Ash.Resource.Actions.Read.Pagination.t/0 (type)

### Ash.Resource.Actions.Read.Pagination.transform/1 (function)

### Ash.Resource.Actions.Update (module)

Represents a update action on a resource.

### Ash.Resource.Actions.Update.t/0 (type)

### Ash.Resource.Actions.Update.transform/1 (function)

### Ash.Resource.Aggregate (module)

Represents a named aggregate on the resource that can be loaded

### Ash.Resource.Aggregate.t/0 (type)

### Ash.Resource.Aggregate.CustomAggregate (behaviour)

The root behavior for a custom aggregate.

See data layers for their implementation of custom aggregates.

### Ash.Resource.Aggregate.CustomAggregate.describe/1 (callback)

### Ash.Resource.Aggregate.CustomAggregate.t/0 (type)

### Ash.Resource.Aggregate.JoinFilter (module)

Represents a join filter on a resource aggregate

### Ash.Resource.Attribute (module)

Represents an attribute on a resource

### Ash.Resource.Attribute.create_timestamp_schema/0 (function)

### Ash.Resource.Attribute.integer_primary_key_schema/0 (function)

### Ash.Resource.Attribute.t/0 (type)

### Ash.Resource.Attribute.transform/1 (function)

### Ash.Resource.Attribute.update_timestamp_schema/0 (function)

### Ash.Resource.Attribute.uuid_primary_key_schema/0 (function)

### Ash.Resource.Attribute.uuid_v7_primary_key_schema/0 (function)

### Ash.Resource.Calculation.Argument (module)

An argument to a calculation

### Ash.Resource.Calculation.Argument.schema/0 (function)

### Ash.Resource.Calculation.Argument.t/0 (type)

### Ash.Resource.Calculation.Context (module)

The context and arguments of a calculation

### Ash.Resource.Calculation.Context.t/0 (type)

### Ash.Resource.Calculation.LoadAttribute (module)

Loads an attribute as a calculation.

Can be used to load the same attribute with different load statements applied.

### Ash.Resource.Calculation.LoadAttribute.calculate/3 (function)

Callback implementation for Ash.Resource.Calculation.calculate/3 .

### Ash.Resource.Calculation.LoadAttribute.describe/1 (function)

Callback implementation for Ash.Resource.Calculation.describe/1 .

### Ash.Resource.Calculation.LoadAttribute.has_calculate?/0 (function)

### Ash.Resource.Calculation.LoadAttribute.has_expression?/0 (function)

Callback implementation for Ash.Resource.Calculation.has_expression?/0 .

### Ash.Resource.Calculation.LoadAttribute.init/1 (function)

Callback implementation for Ash.Resource.Calculation.init/1 .

### Ash.Resource.Calculation.LoadAttribute.load/3 (function)

Callback implementation for Ash.Resource.Calculation.load/3 .

### Ash.Resource.Calculation.LoadAttribute.strict_loads?/0 (function)

Callback implementation for Ash.Resource.Calculation.strict_loads?/0 .

### Ash.Resource.Calculation.LoadRelationship (module)

Loads a relationship as a calculation.

Can be used to load the same relationship with a different query.

### Ash.Resource.Calculation.LoadRelationship.calculate/3 (function)

Callback implementation for Ash.Resource.Calculation.calculate/3 .

### Ash.Resource.Calculation.LoadRelationship.describe/1 (function)

Callback implementation for Ash.Resource.Calculation.describe/1 .

### Ash.Resource.Calculation.LoadRelationship.has_calculate?/0 (function)

### Ash.Resource.Calculation.LoadRelationship.has_expression?/0 (function)

Callback implementation for Ash.Resource.Calculation.has_expression?/0 .

### Ash.Resource.Calculation.LoadRelationship.init/1 (function)

Callback implementation for Ash.Resource.Calculation.init/1 .

### Ash.Resource.Calculation.LoadRelationship.load/3 (function)

Callback implementation for Ash.Resource.Calculation.load/3 .

### Ash.Resource.Calculation.LoadRelationship.strict_loads?/0 (function)

Callback implementation for Ash.Resource.Calculation.strict_loads?/0 .

### Ash.Resource.CalculationInterface (module)

Represents a function that evaluates a calculation in a resource's code interface

### Ash.Resource.CalculationInterface.schema/0 (function)

### Ash.Resource.CalculationInterface.t/0 (type)

### Ash.Resource.CalculationInterface.transform/1 (function)

### Ash.Resource.Identity (module)

Represents a unique constraint on a resource

Data layers should (and all built in ones do), discount `nil` or `null` (in the case of postgres) values
when determining if a unique constraint matches. This often means that you should
prefer to use identities with non-nullable columns.

Eventually, features could be added to support including `nil` or `null` values, but they would
need to include a corresponding feature for data layers.

### Ash.Resource.Identity.schema/0 (function)

### Ash.Resource.Identity.t/0 (type)

### Ash.Resource.Info (module)

Introspection for resources

### Ash.Resource.Info.action/3 (function)

Returns the action with the matching name and type on the resource

### Ash.Resource.Info.action_input?/3 (function)

Returns true or false if the input is accepted by the action, as an argument or an attribute

### Ash.Resource.Info.action_inputs/2 (function)

Returns the list of possible accepted keys by an action

### Ash.Resource.Info.action_select/2 (function)

Returns the list of attributes that must be selected for an action invocation

### Ash.Resource.Info.actions/1 (function)

Returns all actions of a resource

### Ash.Resource.Info.aggregate/2 (function)

Get an aggregate by name

### Ash.Resource.Info.aggregate_type/2 (function)

Gets the type of an aggregate for a given resource.

### Ash.Resource.Info.aggregates/1 (function)

Returns all aggregates of a resource

### Ash.Resource.Info.always_selected_attribute_names/1 (function)

### Ash.Resource.Info.attribute/2 (function)

Get an attribute name from the resource

### Ash.Resource.Info.attribute_names/1 (function)

### Ash.Resource.Info.attributes/1 (function)

Returns all attributes of a resource

### Ash.Resource.Info.attributes_to_require/1 (function)

### Ash.Resource.Info.attributes_to_require/2 (function)

### Ash.Resource.Info.authorizers/1 (function)

A list of authorizers to be used when accessing

### Ash.Resource.Info.base_filter/1 (function)

The base filter of the resource

### Ash.Resource.Info.calculation/2 (function)

Get a calculation by name

### Ash.Resource.Info.calculation_interface/2 (function)

Get an calculation interface by name from the resource

### Ash.Resource.Info.calculation_interfaces/1 (function)

The list of code interface calculation definitions.

### Ash.Resource.Info.calculations/1 (function)

Returns all calculations of a resource

### Ash.Resource.Info.changes/1 (function)

A list of all changes for the resource

### Ash.Resource.Info.changes/2 (function)

A list of all changes for the resource for a given action type

### Ash.Resource.Info.code_interface_domain/1 (function)

The domain to define the interface for, when defining it in the resource

### Ash.Resource.Info.data_layer/1 (function)

The data layer of the resource, or nil if it does not have one

### Ash.Resource.Info.default_actions/1 (function)

Returns the configured default actions

### Ash.Resource.Info.default_context/1 (function)

The default context of the resource

### Ash.Resource.Info.define_interface?/1 (function)

Whether or not to define the interface on the resource

### Ash.Resource.Info.description/1 (function)

The description of the resource

### Ash.Resource.Info.domain/1 (function)

Returns the statically configured domain for the resource.

### Ash.Resource.Info.embedded?/1 (function)

Whether or not the resource is an embedded resource

### Ash.Resource.Info.field/2 (function)

Get a field from a resource by name

### Ash.Resource.Info.fields/2 (function)

Returns all attributes, aggregates, calculations and relationships of a resource

### Ash.Resource.Info.hide_inspect_fields/1 (function)

A deny-list of fields to hide from the inspect output.
Takes precedence over `show_inspect_fields`.

### Ash.Resource.Info.identities/1 (function)

A list of identities for the resource

### Ash.Resource.Info.identity/2 (function)

Get an identity by name from the resource

### Ash.Resource.Info.inspect_private_fields?/1 (function)

Whether to include private fields in the inspect output.
`show_inspect_fields` takes precedence over this option.

### Ash.Resource.Info.interface/2 (function)

Get an interface by name from the resource

### Ash.Resource.Info.interfaces/1 (function)

The list of code interface definitions.

### Ash.Resource.Info.lazy_matching_default_attributes/2 (function)

Returns all attributes of a resource with lazy matching defaults

### Ash.Resource.Info.lazy_non_matching_default_attributes/2 (function)

Returns all attributes of a resource with lazy non-matching-defaults

### Ash.Resource.Info.multitenancy_attribute/1 (function)

The multitenancy attribute for a resource

### Ash.Resource.Info.multitenancy_global?/1 (function)

The MFA to parse the tenant from the attribute

### Ash.Resource.Info.multitenancy_parse_attribute/1 (function)

The function to parse the tenant from the attribute

### Ash.Resource.Info.multitenancy_strategy/1 (function)

The multitenancy strategy for a resource

### Ash.Resource.Info.multitenancy_template/1 (function)

The template for creating the tenant name

### Ash.Resource.Info.notifiers/1 (function)

A list of notifiers to be used when accessing

### Ash.Resource.Info.plural_name/1 (function)

The plural_name of the resource

### Ash.Resource.Info.preparations/1 (function)

### Ash.Resource.Info.primary_action/2 (function)

Returns the primary action of a given type

### Ash.Resource.Info.primary_action!/2 (function)

Returns the primary action of the given type

### Ash.Resource.Info.primary_key/1 (function)

A list of field names corresponding to the primary key

### Ash.Resource.Info.primary_key_simple_equality?/1 (function)

Whether or not all primary key attributes can be compared with simple_equality

### Ash.Resource.Info.public_aggregate/2 (function)

Get an aggregate by name

### Ash.Resource.Info.public_aggregates/1 (function)

Returns all public aggregates of a resource

### Ash.Resource.Info.public_attribute/2 (function)

Get a public attribute name from the resource

### Ash.Resource.Info.public_attributes/1 (function)

Returns all public attributes of a resource

### Ash.Resource.Info.public_calculation/2 (function)

Get a public calculation by name

### Ash.Resource.Info.public_calculations/1 (function)

Returns all public calculations of a resource

### Ash.Resource.Info.public_field/2 (function)

Get a public field from a resource by name

### Ash.Resource.Info.public_fields/1 (function)

Returns all public attributes, aggregates, calculations and relationships of a resource

### Ash.Resource.Info.public_relationship/2 (function)

Get a public relationship by name or path

### Ash.Resource.Info.public_relationships/1 (function)

Returns all public relationships of a resource

### Ash.Resource.Info.related/2 (function)

### Ash.Resource.Info.relationship/2 (function)

Get a relationship by name or path

### Ash.Resource.Info.relationships/1 (function)

Returns all relationships of a resource

### Ash.Resource.Info.required_belongs_to_relationships/1 (function)

The required belongs_to relationships

### Ash.Resource.Info.resource?/1 (function)

Whether or not a given module is a resource module

### Ash.Resource.Info.reverse_relationship/3 (function)

Retrieves a relationship path from the resource related by path, to the provided resource.

### Ash.Resource.Info.selected_by_default_attribute_names/1 (function)

### Ash.Resource.Info.short_name/1 (function)

The short_name of the resource

### Ash.Resource.Info.show_inspect_fields/1 (function)

An allow-list of fields to show in the inspect output.

### Ash.Resource.Info.simple_notifiers/1 (function)

A list of simple notifiers (require no DSL, used to avoid compile time dependencies)

### Ash.Resource.Info.sortable?/3 (function)

Determine if a field is sortable by name

### Ash.Resource.Info.static_default_attributes/2 (function)

Returns all attributes of a resource with static defaults

### Ash.Resource.Info.trace_name/1 (function)

The trace_name of the resource

### Ash.Resource.Info.unique_keys/1 (function)

A list of unique keys and information for a resource

### Ash.Resource.Info.validations/1 (function)

A list of all validations for the resource

### Ash.Resource.Info.validations/2 (function)

A list of all validations for the resource for a given action type

### Ash.Resource.Interface (module)

Represents a function in a resource's code interface

See the functions defined in this module for specifications of the options
that each type of code interface function supports in its options list.

### Ash.Resource.Interface.calculate_opts/0 (function)

Options supported by code interfaces for calculations

### Options - Ash.Resource.Interface.calculate_opts/0 (function)

- `:actor` (`t:term/0`) - The actor for handling `^actor/1` templates, supplied to calculation context.

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - The tenant, supplied to calculation context.

- `:authorize?` (`t:boolean/0`) - Whether or not the request is being authorized, provided to calculation context. The default value is `true`.

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer, provided to the calculation context.

- `:data_layer?` (`t:boolean/0`) - Set to `true` to require that the value be computed within the data layer. Only works for calculations that define an expression.

- `:reuse_values?` (`t:boolean/0`) - Set to `true` to reuse existing values on any provided record. Only necessary if providing a record as the basis for calculation. The default value is `false`.

### Ash.Resource.Interface.create_opts/0 (function)

Options supported by code interfaces for create actions

### Options - Ash.Resource.Interface.create_opts/0 (function)

- `:upsert?` (`t:boolean/0`) - If a conflict is found based on the primary key, the record is updated in the database (requires upsert support) The default value is `false`.

- `:return_skipped_upsert?` (`t:boolean/0`) - If `true`, and a record was _not_ upserted because its filter prevented the upsert, the original record (which was _not_ upserted) will be returned. The default value is `false`.

- `:upsert_identity` (`t:atom/0`) - The identity to use when detecting conflicts for `upsert?`, e.g. `upsert_identity: :full_name`. By default, the primary key is used. Has no effect if `upsert?: true` is not provided

- `:upsert_fields` - The fields to upsert. If not set, the action's upsert_fields is used, and if that is not set, then any fields not being set to defaults are written.

- `:upsert_condition` (`t:term/0`) - An expression to check if the record should be updated when there's a conflict.

- `:timeout` (`t:timeout/0`) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer that implements the `Ash.Tracer` behaviour. See that module for more.

- `:action` (`t:term/0`) - The action to use, either an Action struct or the name of the action

- `:authorize?` - If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

- `:context` (`t:map/0`) - Context to set on the query, changeset, or input

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - A tenant to set on the query or changeset

- `:actor` (`t:term/0`) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

- `:return_notifications?` (`t:boolean/0`) - Use this if you're running ash actions in your own transaction and you want to manually handle sending notifications.
  If a transaction is ongoing, and this is false, notifications will be discarded, otherwise
  the return value is `{:ok, result, notifications}` (or `{:ok, notifications}`)
  To send notifications later, use `Ash.Notifier.notify(notifications)`. It sends any notifications
  that can be sent, and returns the rest. The default value is `false`.

- `:rollback_on_error?` (`t:boolean/0`) - Whether or not to rollback the transaction on error, if the resource is in a transaction.
  If the action has `transaction? false` this option has no effect. If an error is returned from the
  data layer and the resource is in a transaction, the transaction is always rolled back, regardless. The default value is `true`.

- `:notification_metadata` (`t:term/0`) - Metadata to be merged into the metadata field for all notifications sent from this operation. The default value is `%{}`.

- `:skip_unknown_inputs` - A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

- `:load` (`t:term/0`) - A load statement to add onto the changeset

- `:changeset` (`t:term/0`) - A changeset to seed the action with.

- `:bulk_options` (`t:keyword/0`) - Options passed to `Ash.bulk_create`, if a list or stream of inputs is provided.

  - `:select` (list of `t:atom/0`) - A select statement to apply to records. Ignored if `return_records?` is not true.

  - `:after_action` (function of arity 2) - An after_action hook to be added to each processed changeset

  - `:read_action` (`t:atom/0`) - The action to use when building the read query.

  - `:assume_casted?` (`t:boolean/0`) - Whether or not to cast attributes and arguments as input. This is an optimization for cases where the input is already casted and/or not in need of casting The default value is `false`.

  - `:select` (list of `t:atom/0`) - A select statement to apply to records. Ignored if `return_records?` is not true.

  - `:authorize_query_with` - If set to `:error`, instead of filtering unauthorized query results, unauthorized query results will raise an appropriate forbidden error. Uses `authorize_with` if not set.

  - `:authorize_changeset_with` - If set to `:error`, instead of filtering unauthorized changes, unauthorized changes will raise an appropriate forbidden error. Uses `authorize_with` if not set.

  - `:authorize_with` - If set to `:error`, instead of filtering unauthorized query results, unauthorized query results will raise an appropriate forbidden error. The default value is `:filter`.

  - `:sorted?` (`t:boolean/0`) - Whether or not to sort results by their input position, in cases where `return_records?: true` was provided. The default value is `false`.

  - `:return_records?` (`t:boolean/0`) - Whether or not to return all of the records that were inserted. Defaults to false to account for large inserts. The default value is `false`.

  - `:return_errors?` (`t:boolean/0`) - Whether or not to return all of the errors that occur. Defaults to false to account for large inserts. The default value is `true`.

  - `:batch_size` (`t:pos_integer/0`) - The number of records to include in each batch. Defaults to the `default_limit`
    or `max_page_size` of the action, or 100.

  - `:return_stream?` (`t:boolean/0`) - If set to `true`, instead of an `Ash.BulkResult`, a mixed stream is returned.

    Potential elements:

    `{:notification, notification}` - if `return_notifications?` is set to `true`
    `{:ok, record}` - if `return_records?` is set to `true`
    `{:error, error}` - an error that occurred. May be changeset or an individual error.

    The default value is `false`.

  - `:return_nothing?` (`t:boolean/0`) - Mutes warnings about returning nothing.

    Only relevant if `return_stream?` is set to `true` and all other
    `return_*?` options are set to `false`.

    The default value is `false`.

  - `:stop_on_error?` (`t:boolean/0`) - If true, the first encountered error will stop the action and be returned. Otherwise, errors
    will be skipped. The default value is `true`.

  - `:notify?` (`t:boolean/0`) - Whether or not to generate any notifications. If this is set to `true` then the data layer must return
    the results from each batch. This may be intensive for large bulk actions.

    Notifications will be automatically sent unless `return_notifications?` is set to `true`.

    The default value is `false`.

  - `:transaction` - Whether or not to wrap the entire execution in a transaction, each batch, or not at all.

    Keep in mind:

    `before_transaction` and `after_transaction` hooks attached to changesets will have to be run
    _inside_ the transaction if you choose `transaction: :all`.

    The default value is `:batch`.

  - `:max_concurrency` (`t:non_neg_integer/0`) - If set to a value greater than 0, up to that many tasks will be started to run batches asynchronously The default value is `0`.

### Ash.Resource.Interface.destroy_opts/0 (function)

Options supported by code interfaces for destroy actions

### Options - Ash.Resource.Interface.destroy_opts/0 (function)

- `:return_destroyed?` (`t:boolean/0`) - If true, the destroyed record is included in the return result, e.g `{:ok, destroyed}` or `{:ok, destroyed, notifications}` The default value is `false`.

- `:timeout` (`t:timeout/0`) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer that implements the `Ash.Tracer` behaviour. See that module for more.

- `:action` (`t:term/0`) - The action to use, either an Action struct or the name of the action

- `:authorize?` - If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

- `:context` (`t:map/0`) - Context to set on the query, changeset, or input

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - A tenant to set on the query or changeset

- `:actor` (`t:term/0`) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

- `:return_notifications?` (`t:boolean/0`) - Use this if you're running ash actions in your own transaction and you want to manually handle sending notifications.
  If a transaction is ongoing, and this is false, notifications will be discarded, otherwise
  the return value is `{:ok, result, notifications}` (or `{:ok, notifications}`)
  To send notifications later, use `Ash.Notifier.notify(notifications)`. It sends any notifications
  that can be sent, and returns the rest. The default value is `false`.

- `:rollback_on_error?` (`t:boolean/0`) - Whether or not to rollback the transaction on error, if the resource is in a transaction.
  If the action has `transaction? false` this option has no effect. If an error is returned from the
  data layer and the resource is in a transaction, the transaction is always rolled back, regardless. The default value is `true`.

- `:notification_metadata` (`t:term/0`) - Metadata to be merged into the metadata field for all notifications sent from this operation. The default value is `%{}`.

- `:skip_unknown_inputs` - A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

- `:load` (`t:term/0`) - A load statement to add onto the changeset

- `:bulk_options` (`t:keyword/0`) - Options passed to `Ash.bulk_destroy`, if a query, list, or stream of inputs is provided.

  - `:stream_batch_size` (`t:integer/0`) - Batch size to use if provided a query and the query must be streamed

  - `:allow_stream_with` - The 'worst' strategy allowed to be used to fetch records if the `:stream` strategy is chosen. See the `Ash.stream!/2` docs for more. The default value is `:keyset`.

  - `:authorize_query?` (`t:boolean/0`) - If a query is given, determines whether or not authorization is run on that query. The default value is `true`.

  - `:strategy` - The strategy or strategies to enable. :stream is used in all cases if the data layer does not support atomics. The default value is `:atomic`.

  - `:filter` (`t:term/0`) - A filter to apply to records. This is also applied to a stream of inputs.

  - `:allow_stream_with` - The 'worst' strategy allowed to be used to fetch records. See `Ash.stream!/2` docs for more. The default value is `:keyset`.

  - `:stream_with` - The specific strategy to use to fetch records. See `Ash.stream!/2` docs for more.

  - `:max_concurrency` (`t:non_neg_integer/0`) - The maximum number of processes allowed to be started for parallel loading of relationships and calculations. Defaults to `System.schedulers_online() * 2`

  - `:lock` (`t:term/0`) - A lock statement to add onto the query

  - `:return_query?` (`t:boolean/0`) - If `true`, the query that was ultimately used is returned as a third tuple element.

    The query goes through many potential changes during a request, potentially adding
    authorization filters, or replacing relationships for other data layers with their
    corresponding ids. This option can be used to get the true query that was sent to
    the data layer.

    The default value is `false`.

  - `:reuse_values?` (`t:boolean/0`) - Whether calculations are allowed to reuse values that have already been loaded, or must refetch them from the data layer. The default value is `false`.

  - `:strict?` (`t:boolean/0`) - If set to true, only specified attributes will be loaded when passing
    a list of fields to fetch on a relationship, which allows for more
    optimized data-fetching.

    See `Ash.Query.load/2`.

    The default value is `false`.

  - `:authorize_with` - If set to `:error`, instead of applying authorization filters as a filter, any records not matching the authorization filter will cause an error to be returned. The default value is `:filter`.

  - `:read_action` (`t:atom/0`) - The action to use when building the read query.

  - `:assume_casted?` (`t:boolean/0`) - Whether or not to cast attributes and arguments as input. This is an optimization for cases where the input is already casted and/or not in need of casting The default value is `false`.

  - `:select` (list of `t:atom/0`) - A select statement to apply to records. Ignored if `return_records?` is not true.

  - `:authorize_query_with` - If set to `:error`, instead of filtering unauthorized query results, unauthorized query results will raise an appropriate forbidden error. Uses `authorize_with` if not set.

  - `:authorize_changeset_with` - If set to `:error`, instead of filtering unauthorized changes, unauthorized changes will raise an appropriate forbidden error. Uses `authorize_with` if not set.

  - `:authorize_with` - If set to `:error`, instead of filtering unauthorized query results, unauthorized query results will raise an appropriate forbidden error. The default value is `:filter`.

  - `:sorted?` (`t:boolean/0`) - Whether or not to sort results by their input position, in cases where `return_records?: true` was provided. The default value is `false`.

  - `:return_records?` (`t:boolean/0`) - Whether or not to return all of the records that were inserted. Defaults to false to account for large inserts. The default value is `false`.

  - `:return_errors?` (`t:boolean/0`) - Whether or not to return all of the errors that occur. Defaults to false to account for large inserts. The default value is `true`.

  - `:batch_size` (`t:pos_integer/0`) - The number of records to include in each batch. Defaults to the `default_limit`
    or `max_page_size` of the action, or 100.

  - `:return_stream?` (`t:boolean/0`) - If set to `true`, instead of an `Ash.BulkResult`, a mixed stream is returned.

    Potential elements:

    `{:notification, notification}` - if `return_notifications?` is set to `true`
    `{:ok, record}` - if `return_records?` is set to `true`
    `{:error, error}` - an error that occurred. May be changeset or an individual error.

    The default value is `false`.

  - `:return_nothing?` (`t:boolean/0`) - Mutes warnings about returning nothing.

    Only relevant if `return_stream?` is set to `true` and all other
    `return_*?` options are set to `false`.

    The default value is `false`.

  - `:stop_on_error?` (`t:boolean/0`) - If true, the first encountered error will stop the action and be returned. Otherwise, errors
    will be skipped. The default value is `true`.

  - `:notify?` (`t:boolean/0`) - Whether or not to generate any notifications. If this is set to `true` then the data layer must return
    the results from each batch. This may be intensive for large bulk actions.

    Notifications will be automatically sent unless `return_notifications?` is set to `true`.

    The default value is `false`.

  - `:transaction` - Whether or not to wrap the entire execution in a transaction, each batch, or not at all.

    Keep in mind:

    `before_transaction` and `after_transaction` hooks attached to changesets will have to be run
    _inside_ the transaction if you choose `transaction: :all`.

    The default value is `:batch`.

  - `:max_concurrency` (`t:non_neg_integer/0`) - If set to a value greater than 0, up to that many tasks will be started to run batches asynchronously The default value is `0`.

### Ash.Resource.Interface.generic_action_opts/0 (function)

Options supported by code interfaces for generic actions

### Options - Ash.Resource.Interface.generic_action_opts/0 (function)

- `:actor` (`t:term/0`) - The actor for handling `^actor/1` templates, supplied to calculation context.

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - The tenant, supplied to calculation context.

- `:authorize?` (`t:boolean/0`) - Whether or not the request should be authorized.

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer, provided to the calculation context.

- `:context` (`t:map/0`) - Context to set on the action input

- `:skip_unknown_inputs` - A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

### Ash.Resource.Interface.get_opts/0 (function)

Options supported by code interfaces for read actions with `get?` or `get_by` set.

### Options - Ash.Resource.Interface.get_opts/0 (function)

- `:page` - Pagination options, see `Ash.read/2` for more.

- `:load` (`t:term/0`) - A load statement to add onto the query

- `:max_concurrency` (`t:non_neg_integer/0`) - The maximum number of processes allowed to be started for parallel loading of relationships and calculations. Defaults to `System.schedulers_online() * 2`

- `:lock` (`t:term/0`) - A lock statement to add onto the query

- `:return_query?` (`t:boolean/0`) - If `true`, the query that was ultimately used is returned as a third tuple element.
  The query goes through many potential changes during a request, potentially adding
  authorization filters, or replacing relationships for other data layers with their
  corresponding ids. This option can be used to get the true query that was sent to
  the data layer. The default value is `false`.

- `:skip_unknown_inputs` - A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

- `:reuse_values?` (`t:boolean/0`) - Whether calculations are allowed to reuse values that have already been loaded, or must refetch them from the data layer. The default value is `false`.

- `:strict?` (`t:boolean/0`) - If set to true, only specified attributes will be loaded when passing
  a list of fields to fetch on a relationship, which allows for more
  optimized data-fetching.
  See `Ash.Query.load/2`. The default value is `false`.

- `:authorize_with` - If set to `:error`, instead of applying authorization filters as a filter, any records not matching the authorization filter will cause an error to be returned. Valid values are :filter, :error The default value is `:filter`.

- `:timeout` (`t:timeout/0`) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer that implements the `Ash.Tracer` behaviour. See that module for more.

- `:action` (`t:term/0`) - The action to use, either an Action struct or the name of the action

- `:authorize?` - If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

- `:context` (`t:map/0`) - Context to set on the query, changeset, or input

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - A tenant to set on the query or changeset

- `:actor` (`t:term/0`) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

- `:query` - A query to seed the action with.

- `:not_found_error?` (`t:boolean/0`) - Whether or not to return or raise a `NotFound` error or to return `nil` when a get? action/interface is called.

- `:stream?` (`t:boolean/0`) - If true, a stream of the results will be returned The default value is `false`.

- `:stream_options` (`t:keyword/0`) - Options passed to `Ash.stream!`, if `stream?: true` is given

  - `:batch_size` (`t:integer/0`) - How many records to request in each query run. Defaults to the pagination limits on the resource, or 250.

  - `:allow_stream_with` - The 'worst' strategy allowed to be used to fetch records. See `Ash.stream!/2` docs for more. The default value is `:keyset`.

  - `:stream_with` - The specific strategy to use to fetch records. See `Ash.stream!/2` docs for more.

### Ash.Resource.Interface.read_opts/0 (function)

Options supported by code interfaces for read actions

### Options - Ash.Resource.Interface.read_opts/0 (function)

- `:page` - Pagination options, see `Ash.read/2` for more.

- `:load` (`t:term/0`) - A load statement to add onto the query

- `:max_concurrency` (`t:non_neg_integer/0`) - The maximum number of processes allowed to be started for parallel loading of relationships and calculations. Defaults to `System.schedulers_online() * 2`

- `:lock` (`t:term/0`) - A lock statement to add onto the query

- `:return_query?` (`t:boolean/0`) - If `true`, the query that was ultimately used is returned as a third tuple element.
  The query goes through many potential changes during a request, potentially adding
  authorization filters, or replacing relationships for other data layers with their
  corresponding ids. This option can be used to get the true query that was sent to
  the data layer. The default value is `false`.

- `:skip_unknown_inputs` - A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

- `:reuse_values?` (`t:boolean/0`) - Whether calculations are allowed to reuse values that have already been loaded, or must refetch them from the data layer. The default value is `false`.

- `:strict?` (`t:boolean/0`) - If set to true, only specified attributes will be loaded when passing
  a list of fields to fetch on a relationship, which allows for more
  optimized data-fetching.
  See `Ash.Query.load/2`. The default value is `false`.

- `:authorize_with` - If set to `:error`, instead of applying authorization filters as a filter, any records not matching the authorization filter will cause an error to be returned. Valid values are :filter, :error The default value is `:filter`.

- `:timeout` (`t:timeout/0`) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer that implements the `Ash.Tracer` behaviour. See that module for more.

- `:action` (`t:term/0`) - The action to use, either an Action struct or the name of the action

- `:authorize?` - If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

- `:context` (`t:map/0`) - Context to set on the query, changeset, or input

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - A tenant to set on the query or changeset

- `:actor` (`t:term/0`) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

- `:query` - A query to seed the action with.

- `:not_found_error?` (`t:boolean/0`) - Whether or not to return or raise a `NotFound` error or to return `nil` when a get? action/interface is called.

- `:stream?` (`t:boolean/0`) - If true, a stream of the results will be returned The default value is `false`.

- `:stream_options` (`t:keyword/0`) - Options passed to `Ash.stream!`, if `stream?: true` is given

  - `:batch_size` (`t:integer/0`) - How many records to request in each query run. Defaults to the pagination limits on the resource, or 250.

  - `:allow_stream_with` - The 'worst' strategy allowed to be used to fetch records. See `Ash.stream!/2` docs for more. The default value is `:keyset`.

  - `:stream_with` - The specific strategy to use to fetch records. See `Ash.stream!/2` docs for more.

### Ash.Resource.Interface.t/0 (type)

### Ash.Resource.Interface.update_opts/0 (function)

Options supported by code interfaces for update actions

### Options - Ash.Resource.Interface.update_opts/0 (function)

- `:params` (`t:map/0`) - Parameters to supply, ignored if the input is a changeset, only used when an identifier is given.

- `:atomic_upgrade?` (`t:boolean/0`) - If true the action will be done atomically if it can (and is configured to do so), ignoring the in memory transformations and validations. You should not generally need to disable this. The default value is `true`.

- `:timeout` (`t:timeout/0`) - A positive integer, or `:infinity`. If none is provided, the timeout configured on the domain is used.

- `:tracer` (one or a list of module that adopts `Ash.Tracer`) - A tracer that implements the `Ash.Tracer` behaviour. See that module for more.

- `:action` (`t:term/0`) - The action to use, either an Action struct or the name of the action

- `:authorize?` - If an actor option is provided (even if it is `nil`), authorization happens automatically. If not, this flag can be used to authorize with no user. Valid values are true, false, nil

- `:context` (`t:map/0`) - Context to set on the query, changeset, or input

- `:tenant` (value that implements the `Ash.ToTenant` protocol) - A tenant to set on the query or changeset

- `:actor` (`t:term/0`) - If an actor is provided, it will be used in conjunction with the authorizers of a resource to authorize access

- `:return_notifications?` (`t:boolean/0`) - Use this if you're running ash actions in your own transaction and you want to manually handle sending notifications.
  If a transaction is ongoing, and this is false, notifications will be discarded, otherwise
  the return value is `{:ok, result, notifications}` (or `{:ok, notifications}`)
  To send notifications later, use `Ash.Notifier.notify(notifications)`. It sends any notifications
  that can be sent, and returns the rest. The default value is `false`.

- `:rollback_on_error?` (`t:boolean/0`) - Whether or not to rollback the transaction on error, if the resource is in a transaction.
  If the action has `transaction? false` this option has no effect. If an error is returned from the
  data layer and the resource is in a transaction, the transaction is always rolled back, regardless. The default value is `true`.

- `:notification_metadata` (`t:term/0`) - Metadata to be merged into the metadata field for all notifications sent from this operation. The default value is `%{}`.

- `:skip_unknown_inputs` - A list of inputs that, if provided, will be ignored if they are not recognized by the action. Use `:*` to indicate all unknown keys.

- `:load` (`t:term/0`) - A load statement to add onto the changeset

- `:bulk_options` (`t:keyword/0`) - Options passed to `Ash.bulk_update`, if a query, list, or stream of inputs is provided.

  - `:atomic_update` (`t:map/0`) - A map of atomic updates to apply. See `Ash.Changeset.atomic_update/3` for more.

  - `:stream_batch_size` (`t:integer/0`) - Batch size to use if provided a query and the query must be streamed

  - `:allow_stream_with` - The 'worst' strategy allowed to be used to fetch records if the `:stream` strategy is chosen. See the `Ash.stream!/2` docs for more. The default value is `:keyset`.

  - `:authorize_query?` (`t:boolean/0`) - If a query is given, determines whether or not authorization is run on that query. The default value is `true`.

  - `:select` (list of `t:atom/0`) - A select statement to apply to records. Ignored if `return_records?` is not true.

  - `:filter` (`t:term/0`) - A filter to apply to records. This is also applied to a stream of inputs.

  - `:strategy` - The strategy or strategies to enable. :stream is used in all cases if the data layer does not support atomics. The default value is `[:atomic]`.

  - `:allow_stream_with` - The 'worst' strategy allowed to be used to fetch records. See `Ash.stream!/2` docs for more. The default value is `:keyset`.

  - `:stream_with` - The specific strategy to use to fetch records. See `Ash.stream!/2` docs for more.

  - `:max_concurrency` (`t:non_neg_integer/0`) - The maximum number of processes allowed to be started for parallel loading of relationships and calculations. Defaults to `System.schedulers_online() * 2`

  - `:lock` (`t:term/0`) - A lock statement to add onto the query

  - `:return_query?` (`t:boolean/0`) - If `true`, the query that was ultimately used is returned as a third tuple element.

    The query goes through many potential changes during a request, potentially adding
    authorization filters, or replacing relationships for other data layers with their
    corresponding ids. This option can be used to get the true query that was sent to
    the data layer.

    The default value is `false`.

  - `:reuse_values?` (`t:boolean/0`) - Whether calculations are allowed to reuse values that have already been loaded, or must refetch them from the data layer. The default value is `false`.

  - `:strict?` (`t:boolean/0`) - If set to true, only specified attributes will be loaded when passing
    a list of fields to fetch on a relationship, which allows for more
    optimized data-fetching.

    See `Ash.Query.load/2`.

    The default value is `false`.

  - `:authorize_with` - If set to `:error`, instead of applying authorization filters as a filter, any records not matching the authorization filter will cause an error to be returned. The default value is `:filter`.

  - `:read_action` (`t:atom/0`) - The action to use when building the read query.

  - `:assume_casted?` (`t:boolean/0`) - Whether or not to cast attributes and arguments as input. This is an optimization for cases where the input is already casted and/or not in need of casting The default value is `false`.

  - `:select` (list of `t:atom/0`) - A select statement to apply to records. Ignored if `return_records?` is not true.

  - `:authorize_query_with` - If set to `:error`, instead of filtering unauthorized query results, unauthorized query results will raise an appropriate forbidden error. Uses `authorize_with` if not set.

  - `:authorize_changeset_with` - If set to `:error`, instead of filtering unauthorized changes, unauthorized changes will raise an appropriate forbidden error. Uses `authorize_with` if not set.

  - `:authorize_with` - If set to `:error`, instead of filtering unauthorized query results, unauthorized query results will raise an appropriate forbidden error. The default value is `:filter`.

  - `:sorted?` (`t:boolean/0`) - Whether or not to sort results by their input position, in cases where `return_records?: true` was provided. The default value is `false`.

  - `:return_records?` (`t:boolean/0`) - Whether or not to return all of the records that were inserted. Defaults to false to account for large inserts. The default value is `false`.

  - `:return_errors?` (`t:boolean/0`) - Whether or not to return all of the errors that occur. Defaults to false to account for large inserts. The default value is `true`.

  - `:batch_size` (`t:pos_integer/0`) - The number of records to include in each batch. Defaults to the `default_limit`
    or `max_page_size` of the action, or 100.

  - `:return_stream?` (`t:boolean/0`) - If set to `true`, instead of an `Ash.BulkResult`, a mixed stream is returned.

    Potential elements:

    `{:notification, notification}` - if `return_notifications?` is set to `true`
    `{:ok, record}` - if `return_records?` is set to `true`
    `{:error, error}` - an error that occurred. May be changeset or an individual error.

    The default value is `false`.

  - `:return_nothing?` (`t:boolean/0`) - Mutes warnings about returning nothing.

    Only relevant if `return_stream?` is set to `true` and all other
    `return_*?` options are set to `false`.

    The default value is `false`.

  - `:stop_on_error?` (`t:boolean/0`) - If true, the first encountered error will stop the action and be returned. Otherwise, errors
    will be skipped. The default value is `true`.

  - `:notify?` (`t:boolean/0`) - Whether or not to generate any notifications. If this is set to `true` then the data layer must return
    the results from each batch. This may be intensive for large bulk actions.

    Notifications will be automatically sent unless `return_notifications?` is set to `true`.

    The default value is `false`.

  - `:transaction` - Whether or not to wrap the entire execution in a transaction, each batch, or not at all.

    Keep in mind:

    `before_transaction` and `after_transaction` hooks attached to changesets will have to be run
    _inside_ the transaction if you choose `transaction: :all`.

    The default value is `:batch`.

  - `:max_concurrency` (`t:non_neg_integer/0`) - If set to a value greater than 0, up to that many tasks will be started to run batches asynchronously The default value is `0`.

### Ash.Resource.Interface.CustomInput (module)

Represents a custom input to a code interface

### Ash.Resource.Interface.CustomInput.schema/0 (function)

### Ash.Resource.Interface.CustomInput.t/0 (type)

### Ash.Resource.Interface.CustomInput.Transform (module)

Represents a transformation applied to a custom input

### Ash.Resource.Relationships (module)

Types Ash relationships

### Ash.Resource.Relationships.cardinality/0 (type)

### Ash.Resource.Relationships.relationship/0 (type)

### Ash.Resource.Relationships.type/0 (type)

### Ash.Resource.Relationships.BelongsTo (module)

Represents a belongs_to relationship on a resource

### Ash.Resource.Relationships.BelongsTo.t/0 (type)

### Ash.Resource.Relationships.HasMany (module)

Represents a has_many relationship on a resource

### Ash.Resource.Relationships.HasMany.manual/1 (function)

### Ash.Resource.Relationships.HasMany.t/0 (type)

### Ash.Resource.Relationships.HasMany.transform/1 (function)

### Ash.Resource.Relationships.HasOne (module)

Represents a has_one relationship on a resource

### Ash.Resource.Relationships.HasOne.t/0 (type)

### Ash.Resource.Relationships.HasOne.transform/1 (function)

### Ash.Resource.Relationships.ManyToMany (module)

Represents a many_to_many relationship on a resource

### Ash.Resource.Relationships.ManyToMany.t/0 (type)

### Ash.Changeset.ManagedRelationshipHelpers (module)

Tools for introspecting managed relationships.

Extensions can use this to look at an argument that will be passed
to a `manage_relationship` change and determine what their behavior
should be. For example, AshAdmin uses these to find out what kind of
nested form it should offer for each argument that manages a relationship.

### Ash.Changeset.ManagedRelationshipHelpers.could_create?/1 (function)

### Ash.Changeset.ManagedRelationshipHelpers.could_handle_missing?/1 (function)

### Ash.Changeset.ManagedRelationshipHelpers.could_lookup?/1 (function)

### Ash.Changeset.ManagedRelationshipHelpers.could_update?/1 (function)

### Ash.Changeset.ManagedRelationshipHelpers.must_load?/2 (function)

### Ash.Changeset.ManagedRelationshipHelpers.on_lookup_read_action/2 (function)

### Ash.Changeset.ManagedRelationshipHelpers.on_lookup_update_action/2 (function)

### Ash.Changeset.ManagedRelationshipHelpers.on_match_destination_actions/2 (function)

### Ash.Changeset.ManagedRelationshipHelpers.on_missing_destination_actions/2 (function)

### Ash.Changeset.ManagedRelationshipHelpers.on_no_match_destination_actions/2 (function)

### Ash.Changeset.ManagedRelationshipHelpers.sanitize_opts/2 (function)

### Ash.CiString (module)

Represents a case insensitive string

While some data layers are aware of case insensitive string types, in order for values
of this type to be used in other parts of Ash Framework, it has to be embedded in a module
this allows us to implement the `Comparable` protocol for it.

For the type implementation, see `Ash.Type.CiString`

### Ash.CiString.casing/0 (type)

### Ash.CiString.compare/2 (function)

Compares an Elixir String or Ash.CiString. It will return `:eq` if equal, `:lt`, if
the string is ordered alphabetically before the second string, and `:gt` if after.

### Ash.CiString.new/2 (function)

Returns a Ash.CiString from a String, or `nil` if the value is `nil`.

### Ash.CiString.sigil_i/2 (function)

Creates a case insensitive string

### Ash.CiString.string_type/0 (type)

### Ash.CiString.t/0 (type)

### Ash.CiString.to_comparable_string/1 (function)

Returns the downcased value, only downcasing if it hasn't already been done

### Ash.CiString.value/1 (function)

Converts a `Ash.CiString` into a normal Elixir String.

### Ash.Expr (module)

Tools to build Ash expressions

### Ash.Expr.actor/1 (function)

A template helper for using actor values in filter templates

### Ash.Expr.arg/1 (function)

A template helper for using action arguments in filter templates

### Ash.Expr.atomic_ref/1 (function)

A template helper for referring to the most recent atomic expression applied to an update field

### Ash.Expr.calc/2 (macro)

Creates an expression calculation for use in sort and distinct statements.

### Examples - Ash.Expr.calc/2 (macro)

```elixir
Ash.Query.sort(query, [
  {calc(string_upcase(name), :asc},
  {calc(count_nils([field1, field2]), type: :integer), :desc})
])
```

### Ash.Expr.can_return_nil?/1 (function)

### Ash.Expr.combinations/1 (function)

A template helper for creating a reference

### Ash.Expr.context/1 (function)

A template helper for using query context in filter templates

An atom will get the value for a key, and a list will be accessed via `get_in`.

### Ash.Expr.determine_type/1 (function)

### Ash.Expr.determine_types/4 (function)

### Ash.Expr.eval/2 (function)

Evaluate an expression. This function only works if you have no references, or if you provide the `record` option.

### Ash.Expr.eval!/2 (function)

Evaluate an expression. See `eval/2` for more.

### Ash.Expr.expr/1 (macro)

Creates an expression. See the [Expressions guide](/documentation/topics/reference/expressions.md) for more.

### Ash.Expr.expr?/1 (function)

Returns true if the value is or contains an expression

### Ash.Expr.or_where/2 (macro)

### Ash.Expr.parent/1 (function)

A template helper for creating a parent reference

### Ash.Expr.ref/1 (function)

A template helper for creating a reference

### Ash.Expr.ref/2 (function)

A template helper for creating a reference to a related path

### Ash.Expr.t/0 (type)

### Ash.Expr.template_references?/2 (function)

Whether or not a given template contains an actor reference

### Ash.Expr.template_references_argument?/1 (function)

### Ash.Expr.template_references_context?/1 (function)

### Ash.Expr.tenant/0 (function)

A template helper for using the tenant in filter templates

### Ash.Expr.where/2 (macro)

### Ash.Filter (module)

The representation of a filter in Ash.

### Security Concerns - Ash.Filter (module)

Do not pass user input directly to `Ash.Query.filter/2`, it will not be sanitised. Instead use
`Ash.Filter.parse_input/2` or `Ash.Query.filter_input/2`.

Refer to those functions for more information on how to safely work with user input.

### Writing a filter - Ash.Filter (module)

### Built In Predicates - Ash.Filter (module)

- `is_nil`
- `==`
- `!=`
- `in`
- `<`
- `>`
- `<=`
- `>=`
- `&&`
- `||`
- `<>`
- `/`
- `-`
- `*`
- `+`
- `equals` (alias
  for `==`)
- `not_equals` (alias
  for `!=`)
- `gt` (alias
  for `>`)
- `lt` (alias
  for `<`)
- `gte` (alias
  for `>=`)
- `lte` (alias
  for `<=`)
- `eq` (alias
  for `==`)
- `not_eq` (alias
  for `!=`)
- `less_than` (alias
  for `<`)
- `greater_than` (alias
  for `>`)
- `less_than_or_equal` (alias
  for `<=`)
- `greater_than_or_equal` (alias
  for `>=`)
- `and` (alias
  for `&&`)
- `or` (alias
  for `||`)
- `concat` (alias
  for `<>`)
- `div` (alias
  for `/`)
- `minus` (alias
  for `-`)
- `times` (alias
  for `*`)
- `plus` (alias
  for `+`)

### BooleanExpression syntax - Ash.Filter (module)

The expression syntax ultimately just builds the keyword list style filter,
but with lots of conveniences that would be very annoying to do manually.

Examples

```elixir
Ash.Query.filter(resource, name == "Zardoz")
Ash.Query.filter(resource, first_name == "Zar" and last_name == "Doz")
Ash.Query.filter(resource, first_name == "Zar" and last_name in ["Doz", "Daz"] and high_score > 10)
Ash.Query.filter(resource, first_name == "Zar" or last_name == "Doz" or (high_score > 10 and high_score < -10))
```

### Expressions - Ash.Filter (module)

More complex filters can be built using Ash Expressions.

Examples

```elixir
# Filter based on the contents of a string attribute
Ash.Query.filter(Helpdesk.Support.Ticket, contains(subject, "2"))
# Filter based on the attribute of a joined relationship:
Ash.Query.filter(Helpdesk.Support.Ticket, representative.name == ^name)
```

See the [Expressions guide](/documentation/topics/reference/expressions.md)
guide for more information.

### Keyword list syntax - Ash.Filter (module)

A filter is a nested keyword list (with some exceptions, like `true` for
everything and `false` for nothing).

The key is the "predicate" (or "condition") and the value is the parameter.
You can use `and` and `or` to create nested filters. Data layers can expose
custom predicates. Eventually, you will be able to define your own custom
predicates, which will be a mechanism for you to attach complex filters
supported by the data layer to your queries.

** Important ** In a given keyword list, all predicates are considered to be
"ands". So `[or: [first_name: "Tom", last_name: "Bombadil"]]` doesn't mean
'First name == "tom" or last_name == "bombadil"'. To say that, you want to
provide a list of filters, like so: `[or: [[first_name: "Tom"], [last_name:
"Bombadil"]]]`

Some example filters:

```elixir
Ash.Query.filter(resource, [name: "Zardoz"])
Ash.Query.filter(resource, [first_name: "Zar", last_name: "Doz"])
Ash.Query.filter(resource, [first_name: "Zar", last_name: [in: ["Doz", "Daz"]], high_score: [greater_than: 10]])
Ash.Query.filter(resource, [or: [
  [first_name: "Zar"],
  [last_name: "Doz"],
  [or: [
    [high_score: [greater_than: 10]]],
    [high_score: [less_than: -10]]
  ]
]])
```

### Other formats - Ash.Filter (module)

Maps are also accepted, as are maps with string keys. Technically, a list of
`[{"string_key", value}]` would also work.

### Ash.Filter.add_to_filter/6 (function)

### Ash.Filter.add_to_filter!/6 (function)

### Ash.Filter.builtin_functions/0 (function)

### Ash.Filter.builtin_operators/0 (function)

### Ash.Filter.builtin_predicate_operators/0 (function)

### Ash.Filter.builtins/0 (function)

### Ash.Filter.custom_expression/2 (function)

### Ash.Filter.do_hydrate_refs/2 (function)

### Ash.Filter.fetch_simple_equality_predicate/2 (function)

Can be used to find a simple equality predicate on an attribute

Use this when your attribute is configured with `filterable? :simple_equality`, and you want to
to find the value that it is being filtered on with (if any).

### Ash.Filter.find/5 (function)

Find an expression inside of a filter that matches the provided predicate

### Ash.Filter.find_simple_equality_predicate/2 (function)

Can be used to find a simple equality predicate on an attribute

Prefer `fetch_simple_equality_predicate/2`.

### Ash.Filter.find_value/2 (function)

### Ash.Filter.flat_map/2 (function)

### Ash.Filter.get_filter/2 (function)

Returns a filter statement that would find a single record based on the input.

For example:

    iex> get_filter(MyApp.Post, 1)
    {:ok, %{id: 1}} #using primary key
    iex> get_filter(MyApp.Post, id: 1)
    {:ok, %{id: 1}} #using primary key
    iex> get_filter(MyApp.Post, author_id: 1, publication_id: 2, first_name: "fred")
    {:ok, %{author_id: 1, publication_id: 1}} # using a unique identity
    iex> get_filter(MyApp.Post, first_name: "fred")
    :error # not enough information

### Ash.Filter.get_function/3 (function)

### Ash.Filter.get_operator/1 (function)

### Ash.Filter.get_predicate_function/3 (function)

### Ash.Filter.hydrate_refs/2 (function)

### Ash.Filter.list_predicates/1 (function)

### Ash.Filter.list_refs/5 (function)

### Ash.Filter.map/2 (function)

### Ash.Filter.move_exprs_to_relationship_path/2 (function)

### Ash.Filter.move_to_relationship_path/2 (function)

### Ash.Filter.parse/3 (function)

Parses a filter statement

See the module documentation for more information on the supported formats for filter
statements.

### Important - Ash.Filter.parse/3 (function)

If you are trying to validate a filter supplied from an external/untrusted source,
be sure to use `parse_input/2` instead!

### Ash.Filter.parse!/3 (function)

Parses a filter statement

See `parse/2` for more

### Ash.Filter.parse_input/2 (function)

Parses a filter statement, accepting _only public attributes/relationships_ and
honoring field policies & related resource policies, raising on errors.

See `parse/2` for more on filter parsing, and the [policies guide](/documentation/topics/security/policies.md)
for more on input references.

### Ash.Filter.parse_input!/2 (function)

Parses a filter statement, accepting _only public attributes/relationships_ and
honoring field policies & related resource policies, raising on errors.

See `parse_input/2` for more

### Ash.Filter.prefix_refs/2 (function)

### Ash.Filter.put_at_path/2 (function)

### Ash.Filter.relationship_paths/4 (function)

### Ash.Filter.run_other_data_layer_filters/4 (function)

### Ash.Filter.strict_subset_of/2 (function)

Returns true if the second argument is a strict subset (always returns the same or less data) of the first

### Ash.Filter.strict_subset_of?/2 (function)

### Ash.Filter.t/0 (type)

### Ash.Filter.to_simple_filter/2 (function)

Transform an expression based filter to a simple filter, which is just a list of predicates

Options:

- `:skip_invalid?` (`t:boolean/0`) - If an invalid filter expression is reached that can't be used with a simple filter (like an `or` statement, or a non-predicate expression), it will be ignored instead of raising an error. The default value is `false`.

### Ash.Filter.used_aggregates/3 (function)

### Ash.Filter.used_calculations/6 (function)

### Ash.Filter.Runtime (module)

Tools to checks a record to see if it matches a filter statement, or to
evalute expressions against records.

### Ash.Filter.Runtime.filter_matches/4 (function)

Removes any records that don't match the filter. Automatically loads
if necessary. If there are any ambiguous terms in the filter (e.g things
that could only be determined by data layer), it is assumed that they
are not matches.

### Ash.Filter.Runtime.old_get_related/6 (function)

### Ash.Filter.Simple (module)

Represents a simplified filter, with a simple list of predicates

### Ash.Filter.Simple.Not (module)

A negated predicate

### Ash.ForbiddenField (module)

Represents a field that was hidden due to authorization rules.

### Ash.ForbiddenField.field_type/0 (type)

### Ash.ForbiddenField.t/0 (type)

### Ash.Mix.Tasks.Helpers (module)

Helpers for Ash Mix tasks.

### Ash.Mix.Tasks.Helpers.domains!/1 (function)

Get all domains for the current project and ensure they are compiled.

### Ash.Mix.Tasks.Helpers.extensions!/2 (function)

Gets all extensions in use by the current project's domains and resources

### Ash.NotLoaded (module)

Used when a field hasn't been loaded or selected.

### Ash.NotLoaded.t/0 (type)

### Ash.OptionsHelpers (module)

Helpers for working with nimble options

### Ash.OptionsHelpers.ash_resource/0 (function)

Used to configure Spark to know that the type referenced is an Ash.Resource
also using Spark.

### Ash.OptionsHelpers.ash_type/0 (function)

Specifies Ash types that can be allowed when declaring a type for an
attribute, calculation, aggregate, etc.

### Ash.OptionsHelpers.hide_all_except/2 (function)

Used for marking an option as hidden so it doesn't show up as an option
with Spark.

### Ash.Page (module)

Types for Ash pages

### Ash.Page.page/0 (type)

### Ash.Page.type/0 (type)

### Ash.Page.Keyset (module)

A page of results from `keyset` based pagination.

The results are generated with a `keyset` metadata,
which can be used to fetch the next/previous pages.

### Ash.Page.Keyset.data_with_keyset/3 (function)

Appends keyset info to results.

### Ash.Page.Keyset.filter/4 (function)

Creates filters on the query using the query for the Keyset.

### Ash.Page.Keyset.new/6 (function)

Creates a new `Ash.Page.Keyset.t`.

### Ash.Page.Keyset.non_executable_binary_to_term/2 (function)

A restricted version of `:erlang.binary_to_term/2` that forbids
_executable_ terms, such as anonymous functions.
The `opts` are given to the underlying `:erlang.binary_to_term/2`
call, with an empty list as a default.
By default this function does not restrict atoms, as an atom
interned in one node may not yet have been interned on another
(except for releases, which preload all code).
If you want to avoid atoms from being created, then you can pass
`[:safe]` as options, as that will also enable the safety mechanisms
from `:erlang.binary_to_term/2` itself.
Ripped from https://github.com/elixir-plug/plug_crypto/blob/v1.2.0/lib/plug/crypto.ex

### Ash.Page.Keyset.page_opts/0 (type)

### Ash.Page.Keyset.page_opts_opts/0 (type)

### Ash.Page.Keyset.page_opts_type/0 (type)

### Ash.Page.Keyset.t/0 (type)

### Ash.Page.Offset (module)

A page of results from `offset` based pagination.

If a resource supports `keyset` pagination as well,
it will also have the `keyset` metadata.

### Ash.Page.Offset.new/5 (function)

Creates a new `Ash.Page.Offset.t()`.

### Ash.Page.Offset.page_opts/0 (type)

### Ash.Page.Offset.page_opts_opts/0 (type)

### Ash.Page.Offset.page_opts_type/0 (type)

### Ash.Page.Offset.t/0 (type)

### Ash.PlugHelpers (module)

Helpers for working with the Plug connection.

### Ash.PlugHelpers.get_actor/1 (function)

Retrieves the actor from the Plug connection.

The actor is stored inside the [connection's private
fields](https://hexdocs.pm/plug/Plug.Conn.html#module-private-fields).

### Deprecation warning - Ash.PlugHelpers.get_actor/1 (function)

This function checks to see if the actor is already set in the `@actor`
assign, and if so will emit a deprecation warning.

This is to allow apps using the previous method a chance to update.

Rather than setting the actor in the assigns, please use the `set_actor/2`
method.

### Example - Ash.PlugHelpers.get_actor/1 (function)

iex> actor = build_actor(%{email: "marty@1985.retro"})
...> conn = build_conn() |> put_private(:ash, %{actor: actor})
...> actor = get_actor(conn)
%{email: "marty@1985.retro"} = actor

    iex> actor = build_actor(%{email: "marty@1985.retro"})
    ...> conn = build_conn() |> assign(:actor, actor)
    ...> actor = get_actor(conn)
    %{email: "marty@1985.retro"} = actor

### Ash.PlugHelpers.get_context/1 (function)

Retrieves the context from the Plug connection.

The context is stored inside the [connection's private
fields](https://hexdocs.pm/plug/Plug.Conn.html#module-private-fields).

### Example - Ash.PlugHelpers.get_context/1 (function)

iex> context = %{fraud_score: 0.427}
...> conn = build_conn() |> put_private(:ash, %{context: context})
...> context = get_context(conn)
%{fraud_score: 0.427}

### Ash.PlugHelpers.get_tenant/1 (function)

Retrieves the tenant from the Plug connection.

The tenant is stored inside the [connection's private
fields](https://hexdocs.pm/plug/Plug.Conn.html#module-private-fields).

### Deprecation warning - Ash.PlugHelpers.get_tenant/1 (function)

This function checks to see if the tenant is already set in the `@tenant`
assign, and if so will emit a deprecation warning.

This is to allow apps using the previous method a chance to update.

Rather than setting the tenant in the assigns, please use the `set_tenant/2`
method.

### Example - Ash.PlugHelpers.get_tenant/1 (function)

iex> conn = build_conn() |> put_private(:ash, %{tenant: "my-tenant"})
...> tenant = get_tenant(conn)
"my_tenant" = tenant

    iex> conn = build_conn() |> assign(:tenant, "my-tenant")
    ...> tenant = get_tenant(conn)
    "my_tenant" = tenant

### Ash.PlugHelpers.set_actor/2 (function)

Sets the actor inside the Plug connection.

The actor is stored inside the [connection's private
fields](https://hexdocs.pm/plug/Plug.Conn.html#module-private-fields).

### Example - Ash.PlugHelpers.set_actor/2 (function)

iex> actor = build_actor(%{email: "marty@1985.retro"})
...> conn = build_conn() |> set_actor(actor)
%Plug.Conn{private: %{ash: %{actor: %{email: "marty@1985.retro"}}}} = conn

### Ash.PlugHelpers.set_context/2 (function)

Sets the context inside the Plug connection.

Context can be used to store arbitrary data about the user, connection, or
anything else you like that doesn't belong as part of the actor or tenant.

The context is stored inside the [connection's private
fields](https://hexdocs.pm/plug/Plug.Conn.html#module-private-fields).

### Example - Ash.PlugHelpers.set_context/2 (function)

iex> context = %{fraud_score: 0.427}
...> conn = build_conn() |> set_context(context)
%Plug.Conn{private: %{ash: %{context: %{fraud_score: 0.427}}}}

### Ash.PlugHelpers.set_tenant/2 (function)

Sets the tenant inside the Plug connection.

The tenant is stored inside the [connection's private
fields](https://hexdocs.pm/plug/Plug.Conn.html#module-private-fields).

### Example - Ash.PlugHelpers.set_tenant/2 (function)

iex> conn = build_conn() |> set_tenant("my-tenant")
%Plug.Conn{private: %{ash: %{tenant: "my-tenant}}} = conn

### Ash.PlugHelpers.update_actor/2 (function)

Updates the actor inside the Plug connection.

The actor is stored inside the [connection's private
fields](https://hexdocs.pm/plug/Plug.Conn.html#module-private-fields).

### Example - Ash.PlugHelpers.update_actor/2 (function)

iex> actor = build_actor(%{email: "marty@1985.retro"})
...> conn = build_conn() |> put_private(:ash, %{actor: actor})
...> actor = get_actor(conn)
%{email: "marty@1985.retro"} = actor
...> conn = update_actor(conn, fn actor -> Map.put(actor, :name, "Marty Retro") end)
...> actor = get_actor(conn)
%{email: "marty@1985.retro", name: "Marty Retro"} = actor
...> conn = update_actor(conn, fn actor -> Map.delete(actor, :email) end)
...> actor = get_actor(conn)
%{name: "Marty Retro"} = actor

### Ash.PlugHelpers.update_context/2 (function)

Updates the context inside the Plug connection.

The context is stored inside the [connection's private
fields](https://hexdocs.pm/plug/Plug.Conn.html#module-private-fields).

### Example - Ash.PlugHelpers.update_context/2 (function)

iex> context = %{species: "Fythetropozoat"}
...> conn = build_conn() |> put_private(:ash, %{context: context})
...> context = get_context(conn)
%{fraud_score: 0.427}
...> conn = update_context(conn, fn context -> Map.put(context, :location, "Barnard's Loop") end)
...> context = get_context(conn)
%{species: "Fythetropozoat", location: "Barnard's Loop"}
...> conn = update_context(conn, fn context -> Map.delete(context, :fraud_score) end)
...> context = get_context(conn)
%{location: "Barnard's Loop"}

### Ash.ProcessHelpers (module)

Helpers for working with processes and Ash actions.

### Ash.ProcessHelpers.async/2 (function)

Creates a task that will properly transfer the ash context to the new process

### Ash.ProcessHelpers.get_context_for_transfer/1 (function)

Gets all of the ash context so it can be set into a new process.

Use `transfer_context/1` in the new process to set the context.

### Ash.ProcessHelpers.task_with_timeout/5 (function)

Creates a task that will properly transfer the ash context to the new process, and timeout if it takes longer than the given timeout

### Ash.ProcessHelpers.transfer_context/2 (function)

### Ash.Resource.Builder (module)

Tools for transforming resources in DSL Transformers.

### Ash.Resource.Builder.add_action/4 (function)

Builds and adds an action

### Ash.Resource.Builder.add_aggregate/5 (function)

Builds and adds an aggregate to a resource

### Ash.Resource.Builder.add_attribute/4 (function)

Builds and adds an attribute to a resource

### Ash.Resource.Builder.add_calculation/5 (function)

Builds and adds a calculation to a resource

### Ash.Resource.Builder.add_calculation_interface/3 (function)

Builds and adds an calculation interface to a resource

### Ash.Resource.Builder.add_change/3 (function)

Builds and adds a change

### Ash.Resource.Builder.add_create_timestamp/3 (function)

Builds and adds a create_timestamp to a resource

### Ash.Resource.Builder.add_identity/4 (function)

Builds and adds an identity

### Ash.Resource.Builder.add_interface/3 (function)

Builds and adds an interface to a resource

### Ash.Resource.Builder.add_new_action/4 (function)

Builds and adds a new action unless an action with that name already exists

### Ash.Resource.Builder.add_new_aggregate/5 (function)

Builds and adds an aggregate unless an aggregate with that name already exists

### Ash.Resource.Builder.add_new_attribute/4 (function)

Builds and adds an attribute unless an attribute with that name already exists

### Ash.Resource.Builder.add_new_calculation/5 (function)

Builds and adds a calculation unless a calculation with that name already exists

### Ash.Resource.Builder.add_new_calculation_interface/3 (function)

Builds and adds an calculation interface unless an calculation interface with that name already exists

### Ash.Resource.Builder.add_new_create_timestamp/3 (function)

Builds and adds a create_timestamp unless a create_timestamp with that name already exists

### Ash.Resource.Builder.add_new_identity/4 (function)

Builds and adds a new identity unless an identity with that name already exists

### Ash.Resource.Builder.add_new_interface/3 (function)

Builds and adds an interface unless an interface with that name already exists

### Ash.Resource.Builder.add_new_relationship/5 (function)

Builds and adds a new relationship unless a relationship with that name already exists

### Ash.Resource.Builder.add_new_update_timestamp/3 (function)

Builds and adds an update_timestamp unless an update_timestamp with that name already exists

### Ash.Resource.Builder.add_preparation/3 (function)

Builds and adds a preparation

### Ash.Resource.Builder.add_relationship/5 (function)

Builds and adds an action

### Ash.Resource.Builder.add_update_timestamp/3 (function)

Builds and adds an update_timestamp

### Ash.Resource.Builder.build_action/3 (function)

Builds an action

### Ash.Resource.Builder.build_action_argument/3 (function)

Builds an action argument

### Ash.Resource.Builder.build_action_change/2 (function)

Builds an action change

### Ash.Resource.Builder.build_action_metadata/3 (function)

Builds an action metadata

### Ash.Resource.Builder.build_action_validation/2 (function)

Builds an action validation

### Ash.Resource.Builder.build_aggregate/4 (function)

Builds a calculation with the given name, type, and options

### Ash.Resource.Builder.build_attribute/3 (function)

Builds an attribute with the given name, type, and options

### Ash.Resource.Builder.build_calculation/4 (function)

Builds a calculation with the given name, type, and options

### Ash.Resource.Builder.build_calculation_argument/3 (function)

Builds a calculation argument

### Ash.Resource.Builder.build_calculation_interface/2 (function)

Builds an calculation interface with the given name, type, and options

### Ash.Resource.Builder.build_change/2 (function)

Builds a change

### Ash.Resource.Builder.build_create_timestamp/2 (function)

Builds an create_timestamp with the given name, type, and options

### Ash.Resource.Builder.build_identity/3 (function)

Builds an action

### Ash.Resource.Builder.build_interface/2 (function)

Builds an interface with the given name, type, and options

### Ash.Resource.Builder.build_pagination/1 (function)

Builds a pagination object

### Ash.Resource.Builder.build_preparation/2 (function)

Builds a preparation

### Ash.Resource.Builder.build_relationship/4 (function)

Builds a relationship

### Ash.Resource.Builder.build_update_timestamp/2 (function)

Builds an update_timestamp with the given name, type, and options

### Ash.Resource.Builder.prepend_action/4 (function)

Builds and adds an action to the front of the actions list

### Ash.SatSolver (module)

Tools for working with the satsolver that drives filter subset checking (for authorization)

This is public as a very low level toolkit for writing authorizers, but you almost certainly
do not need to look at this module.

If you are looking for information about how authorization works, see the [policy guide](/documentation/topics/security/policies.md)

### Ash.SatSolver.b/1 (macro)

Creates tuples of a boolean statement.

i.e `b(1 and 2) #=> {:and, 1, 2}`

### Ash.SatSolver.left_excludes_right/2 (function)

Returns `b(not (left and right))`

### Ash.SatSolver.left_implies_right/2 (function)

Returns `b(not (left and not right))`

### Ash.SatSolver.mutually_exclusive/2 (function)

Returns a statement expressing that the predicates are mutually exclusive.

### Ash.SatSolver.mutually_exclusive_and_collectively_exhaustive/1 (function)

Returns a statement expressing that the predicates are mutually exclusive and collectively exhaustive.

### Ash.SatSolver.mutually_inclusive/2 (function)

Returns a statement expressing that the predicates are mutually inclusive

### Ash.SatSolver.right_excludes_left/2 (function)

Returns `b(not (right and left))`

### Ash.SatSolver.right_implies_left/2 (function)

Returns `b(not (right and not left))`

### Ash.SatSolver.strict_filter_subset/2 (function)

Returns true if the candidate filter returns the same or less data than the filter

### Ash.SatSolver.synonymous_relationship_paths?/4 (function)

Returns `true` if the relationship paths are synonymous from a data perspective

### Ash.SatSolver.to_cnf/1 (function)

Transforms a statement to Conjunctive Normal Form(CNF), as lists of lists of integers.

### Ash.SatSolver.transform/2 (function)

Prepares a filter for comparison

### Ash.SatSolver.transform_and_solve/2 (function)

Calls `transform/2` and solves the expression

### Ash.Sort (module)

Utilities and types for sorting.

### Ash.Sort.expr_sort/2 (macro)

Builds an expression to be used in a sort statement. Prefer to use `Ash.Expr.calc/2` instead.

For example:

```elixir
Ash.Query.sort(query, Ash.Sort.expr_sort(author.full_name, :string))

Ash.Query.sort(query, [{Ash.Sort.expr_sort(author.full_name, :string), :desc_nils_first}])
```

### Ash.Sort.parse_input/3 (function)

A utility for parsing sorts provided from external input. Only allows sorting on public fields.

See `Ash.Query.sort/3` for supported formats.

### Handling specific values - Ash.Sort.parse_input/3 (function)

A handler function may be provided that takes a string, and returns the relevant sort
It won't be given any prefixes, only the field. This allows for things like parsing the calculation values
out of the sort, or setting calculation values if they are not included in the sort string.

To return calculation parameters, return `{:field, %{param: :value}}`. This will end up as something
like `{:field, {%{param: :value}, :desc}}`, with the corresponding sort order.

This handler function will only be called if you pass in a string or list of strings for the sort.
Atoms will be assumed to have already been handled. The handler should return `nil` if it is not handling
the given field.

### Ash.Sort.parse_input!/3 (function)

Same as `parse_input/2` except raises any errors

See `parse_input/2` for more.

### Ash.Sort.parse_sort/4 (function)

### Ash.Sort.reverse/1 (function)

Reverses an Ash sort statement.

### Ash.Sort.runtime_sort/3 (function)

A utility for sorting a list of records at runtime.

For example:

    Ash.Sort.runtime_sort([record1, record2, record3], name: :asc, type: :desc_nils_last)

Keep in mind that it is unrealistic to expect this runtime sort to always
be exactly the same as a sort that may have been applied by your data layer.
This is especially true for strings. For example, `Postgres` strings have a
collation that affects their sorting, making it unpredictable from the perspective
of a tool using the database: https://www.postgresql.org/docs/current/collation.html

### Ash.Sort.sort_item/0 (type)

### Ash.Sort.sort_order/0 (type)

### Ash.Sort.t/0 (type)

### Ash.UUID (module)

Helpers for working with UUIDs

### Ash.UUID.generate/0 (function)

Generates a new uuid

### Ash.UUID.raw/0 (type)

A raw binary representation of a UUID.

### Ash.UUID.t/0 (type)

A hex-encoded UUID string.

### Ash.UUIDv7 (module)

Helpers for working with UUIDs version 7.

[RFC 9562](https://www.rfc-editor.org/rfc/rfc9562#name-uuid-version-7)

Used for generating UUIDs version 7 with increased clock precision for better monotonicity,
as described by method 3 of the [Section 6.2](https://www.rfc-editor.org/rfc/rfc9562#name-monotonicity-and-counters

Inspired by the work of [Ryan Winchester](https://github.com/ryanwinchester/) on [uuidv7](https://github.com/ryanwinchester/uuidv7)

### Examples - Ash.UUIDv7 (module)

iex> UUIDv7.generate()
"018e90d8-06e8-7f9f-bfd7-6730ba98a51b"

    iex> UUIDv7.bingenerate()
    <<1, 142, 144, 216, 6, 232, 127, 159, 191, 215, 103, 48, 186, 152, 165, 27>>

### Ash.UUIDv7.bingenerate/0 (function)

Generates a version 7 UUID in the binary format.

### Example - Ash.UUIDv7.bingenerate/0 (function)

iex> UUIDv7.bingenerate()
<<1, 142, 144, 216, 6, 232, 127, 159, 191, 215, 103, 48, 186, 152, 165, 27>>

### Ash.UUIDv7.decode/1 (function)

Decode a string representation of a UUID to the raw binary version.

### Example - Ash.UUIDv7.decode/1 (function)

iex> UUIDv7.decode("018e90d8-06e8-7f9f-bfd7-6730ba98a51b")
<<1, 142, 144, 216, 6, 232, 127, 159, 191, 215, 103, 48, 186, 152, 165, 27>>

### Ash.UUIDv7.encode/1 (function)

Encode a raw UUID to the string representation.

### Example - Ash.UUIDv7.encode/1 (function)

iex> UUIDv7.encode(<<1, 142, 144, 216, 6, 232, 127, 159, 191, 215, 103, 48, 186, 152, 165, 27>>)
"018e90d8-06e8-7f9f-bfd7-6730ba98a51b"

### Ash.UUIDv7.extract_timestamp/1 (function)

Extract the millisecond timestamp from the UUID.

### Example - Ash.UUIDv7.extract_timestamp/1 (function)

iex> UUIDv7.extract_timestamp("018ecb40-c457-73e6-a400-000398daddd9")
1712807003223

### Ash.UUIDv7.generate/0 (function)

Generates a version 7 UUID using submilliseconds for increased clock precision.

### Example - Ash.UUIDv7.generate/0 (function)

iex> UUIDv7.generate()
"018e90d8-06e8-7f9f-bfd7-6730ba98a51b"

### Ash.UUIDv7.raw/0 (type)

A raw binary representation of a UUID.

### Ash.UUIDv7.t/0 (type)

A hex-encoded UUID string.

### Ash.Union (module)

A wrapper for values that are sourced from `Ash.Type.Union`.

### Ash.Union.t/0 (type)

### Ash.Vector (module)

A vector struct for Ash.

Implementation based off of https://github.com/pgvector/pgvector-elixir/blob/v0.2.0/lib/pgvector.ex

### Ash.Vector.from_binary/1 (function)

Creates a new vector from its binary representation

### Ash.Vector.new/1 (function)

Creates a new vector from a list or tensor

### Ash.Vector.t/0 (type)

### Ash.Vector.to_binary/1 (function)

Converts the vector to its binary representation

### Ash.Vector.to_list/1 (function)

Converts the vector to a list

### Ash.Domain.Info.Diagram (module)

Generate Mermaid diagrams from a specified domain.

### Limitations - Ash.Domain.Info.Diagram (module)

We can't easily model Ash relationships with Mermaid diagrams
because they are unidirectional and could be asymmetric.
Mermaid assumes symmetrical, bidirectional relationships.
If we try to model all unidirectional relationships as separate
lines in the diagram it gets very hard to read very quickly.

### Ash.Domain.Info.Diagram.mermaid_class_diagram/2 (function)

Generates a Mermaid Class Diagram for a given domain.

Shows only public attributes, calculations, aggregates and actions.
Shows a connecting line for relationships with the type of relationship
indicated in the attribute list.

### Ash.Domain.Info.Diagram.mermaid_er_diagram/2 (function)

Generates a Mermaid Entity Relationship Diagram for a given domain or list of domains.

Shows only public attributes, calculations, aggregates and actions.
Shows a one-to-one line for relationships as enumerating all unidirectional
relationships is far too noisy.

### Ash.Domain.Info.Livebook (module)

Generate a Livebook from a specified domain.

### Ash.Domain.Info.Livebook.action_header/0 (function)

### Ash.Domain.Info.Livebook.action_input_section/2 (function)

### Ash.Domain.Info.Livebook.action_section/2 (function)

### Ash.Domain.Info.Livebook.attr_header/0 (function)

### Ash.Domain.Info.Livebook.attr_section/1 (function)

### Ash.Domain.Info.Livebook.domain_section/1 (function)

### Ash.Domain.Info.Livebook.overview/1 (function)

### Ash.Domain.Info.Livebook.resource_section/1 (function)

### Ash.Policy.Chart.Mermaid (module)

Generates policy mermaid charts

### Ash.Policy.Chart.Mermaid.chart/1 (function)

### Ash.Generator (module)

Tools for generating input to Ash resource actions and for generating seed data.

### Using Ash.Generator - Ash.Generator (module)

To define generators for your tests, `use Ash.Generator`, and define
functions that use `changeset_generator/3` and/or `seed_generator/2`.

```elixir
defmodule YourApp.Generator do
  use Ash.Generator

  # using `seed_generator`, bypasses the action and saves directly to the data layer
  def blog_post(opts \\ []) do
    seed_generator(
      %MyApp.Blog.Post{
        name: sequence(:title, &"My Blog Post #{&1}")
        text: StreamData.repeatedly(fn -> Faker.Lorem.paragraph() end)
      },
      overrides: opts
    )
  end

  # using `changeset_generator`, calls the action when passed to `generate`
  def blog_post_comment(opts \\ []) do
    blog_post_id = opts[:blog_post_id] || once(:default_blog_post_id, fn -> generate(blog_post()).id end)

    changeset_generator(
      MyApp.Blog.Comment,
      :create,
      defaults: [
        blog_post_id: blog_post_id
      ],
      overrides: opts
    )
  end
end
```

Then, in your tests, you can `import YourApp.Generator`, and use `generate/1` and `generate_many/1` to generate data.
For example:

```elixir
import YourApp.Generator

test "`comment_count` on blog_post shows the count of comments" do
  blog_post = generate(blog_post())
  assert Ash.load!(blog_post, :comment_count).comment_count == 0

  generate_many(blog_post_comment(blog_post_id: blog_post.id), 10)

  assert Ash.load!(blog_post, :comment_count).comment_count == 10
end
```

### About Generators - Ash.Generator (module)

These generators are backed by `StreamData`, and are ready for use with property testing via `ExUnitProperties`

Many functions in this module support "overrides", which allow passing down either constant values
or your own `StreamData` generators.

For example:

```elixir
# All generated posts will have text as `"text"`. Equivalent to providing `StreamData.constant("text")`.
Ash.Generator.seed_input(Post, %{text: "text"})
```

### Ash.Generator.action_input/3 (function)

Generate input meant to be passed into a resource action.

Arguments that are passed to a `manage_relationship` are not generated by default, and you will
have to generate them yourself by passing your own generators/values down. See the module documentation for more.

### Ash.Generator.changeset/4 (function)

Creates the input for the provided action with `action_input/3`, and creates a changeset for that action with that input.

See `action_input/3` and the module documentation for more.

### Ash.Generator.changeset_generator/3 (function)

A generator of changesets which call their specific actions when passed to `generate/1` or `generate_many/2`.

See `seed_generator/2` for the equivalent construct for cases when you want to seed directly to the data layer as opposed to calling resource
actions.

### Examples - Ash.Generator.changeset_generator/3 (function)

```elixir
iex> changeset_generator(MyApp.Blog.Post, :create, defaults: [title: sequence(:blog_post_title, &"My Blog Post #{&1}")]) |> generate()
%Ash.Changeset{...}
```

### Usage in tests - Ash.Generator.changeset_generator/3 (function)

This can be used to define generators in tests. A useful pattern is defining a function like so:

```elixir
def blog_post(opts \ []) do
  changeset_generator(
    MyApp.Blog.Post,
    :create,
    defaults: [
      name: sequence(:blog_post_title, &"My Blog Post #{&1}")
      text: StreamData.repeatedly(fn -> Faker.Lorem.paragraph() end)
    ],
    overrides: opts
  )
end
```

When you only allow child resource to be created through a managed relationship, e.g. an update action on a parent resource,
this pattern could be expanded, yielding a resource with a new child resource:

```elixir
def post_for(author, opts \ []) do
  changeset_generator(
    author,
    :new_post,
    uses: [
      post_input:
        action_input(
          MyApp.Blog.Post,
          :create,
          title: sequence(:title, &"Post #{&1}")
        )
    ],
    defaults: fn inputs ->
      [posts: [inputs.post_input]]
    end,
    overrides: opts
  )
end
```

See the `Ash.Generator` moduledocs for more information.

### Options - Ash.Generator.changeset_generator/3 (function)

- `:defaults` - A keyword list of values or generators, used as inputs. Can also be a function
  when using the `:uses` option.
- `:overrides` - A keyword list or map of `t:overrides()`
- `:actor` - Passed through to the changeset
- `:tenant` - Passed through to the changeset
- `:uses` - A map of generators that are passed into your `defaults`. `defaults` must be a
  function. This is useful when multiple things in your `defaults` need to use the same generated
  value.
- `:authorize?` - Passed through to the changeset
- `:context` - Passed through to the changeset
- `:after_action` - A one argument function that takes the result and returns
  a new result to run after the record is created.
- `:private_arguments` - A map of private arguments, whos values can also be generators. Can also
  be a function when using the `:uses` option.

### The uses option - Ash.Generator.changeset_generator/3 (function)

```elixir
def blog_post(opts \ []) do
  changeset_generator(
    MyApp.Blog.Post,
    :create,
    uses: [
      author: author() # A function using `changeset_generator` just like this one.
    ],
    defaults: fn %{author: author} ->
      author = generate(author)

      [
        name: sequence(:blog_post_title, &"My Blog Post #{&1}")
        author_name: author.name,
        text: StreamData.repeatedly(fn -> Faker.Lorem.paragraph() end)
      ]
    end
    overrides: opts
  )
end
```

### Ash.Generator.generate/1 (function)

Takes one value from a changeset or seed generator and calls `Ash.create!` or `Ash.update!` on it.

Passes through resource structs without doing anything.
Creates a changeset if given

### Ash.Generator.generate_many/2 (function)

Takes `count` values from a changeset or seed generator and passes their inputs into `Ash.bulk_create!` or `Ash.Seed.seed!` respectively.

### Ash.Generator.initialize_once/1 (function)

Starts and links an agent for a `once/2`, or returns the existing agent pid if it already exists.

See `once/2` for more.

### Ash.Generator.initialize_sequence/1 (function)

Starts and links an agent for a sequence, or returns the existing agent pid if it already exists.

See `sequence/3` for more.

### Ash.Generator.many_changesets/5 (function)

Generate `count` changesets and return them as a list.

### Ash.Generator.many_queries/5 (function)

Generate `count` queries and return them as a list.

### Ash.Generator.mixed_map/2 (function)

Creates a generator of maps where all keys are required except the list provided

### Example - Ash.Generator.mixed_map/2 (function)

```elixir
iex> mixed_map(%{a: StreamData.constant(1), b: StreamData.constant(2)}, [:b]) |> Enum.take(2)
[%{a: 1}, %{a: 1, b: 2}]
```

### Ash.Generator.next_in_sequence/3 (function)

Gets the next value for a given sequence identifier.

See `sequence/3` for more.

This is equivalent to `identifier |> Ash.Generator.sequence(fun, sequencer) |> Enum.at(0)`

### Ash.Generator.once/2 (function)

Run the provided function or enumerable (i.e generator) only once.

This is useful for ensuring that some piece of data is generated a single time during a test.

The lifecycle of this generator is tied to the process that initially starts it. In general,
that will be the test. In the rare case where you are running async processes that need to share a sequence
that is not created in the test process, you can initialize a sequence in the test using `initialize_once/1`.

Example:

    iex> Ash.Generator.once(:user, fn ->
           register_user(...)
         end) |> Enum.at(0)
    %User{id: 1} # created the user

    iex> Ash.Generator.once(:user, fn ->
           register_user(...)
         end) |> Enum.at(0)
    %User{id: 1} # reused the last user

### Ash.Generator.overrides/0 (type)

A map or keyword of data generators or constant values to use in place of defaults.

Many functions in `Ash.Generator` support `overrides`, allowing to customize the default
generated values.

### Ash.Generator.query/4 (function)

Creates the input for the provided action with `action_input/3`, and returns a query for that action with that input.

See `action_input/3` and the module documentation for more.

### Ash.Generator.seed!/2 (function)

Gets input using `seed_input/2` and passes it to `Ash.Seed.seed!/2`, returning the result

### Ash.Generator.seed_generator/2 (function)

A generator of seedable records, to be passed to `generate/1` or `generate_many/1`

See `changeset_generator/3` for the equivalent construct for cases when you want to call resource
actions as opposed to seed directly to the data layer.

When a struct is given, only exactly the given values/generators will be used. If you
pass a tuple, i.e `{Resource, %{field: :value}}`, all values not provided will be generated
automatically.

### Examples - Ash.Generator.seed_generator/2 (function)

```elixir
iex> seed_generator(%MyApp.Blog.Post{name: sequence(:blog_post_title, &"My Blog Post #{&1}")}) |> generate()
%Tunez.Music.Artist{name: "Artist 1"}

iex> seed_generator({MyApp.Blog.Post, %{}}) |> generate()
%Tunez.Music.Artist{name: "A random name"}
```

### Usage in tests - Ash.Generator.seed_generator/2 (function)

This can be used to define seed generators in tests. A useful pattern is defining a function like so:

```elixir
def blog_post(opts \ []) do
  seed_generator(
    %MyApp.Blog.Post{
      name: sequence(:blog_post_title, &"My Blog Post #{&1}")
      text: StreamData.repeatedly(fn -> Faker.Lorem.paragraph() end)
    },
    overrides: opts
  )
end
```

See the `Ash.Generator` moduledocs for more information.

### Options - Ash.Generator.seed_generator/2 (function)

- `:overrides` - A keyword list or map of `t:overrides()`
- `:actor` - Passed through to the changeset
- `:tenant` - Passed through to the changeset
- `:uses` - A map of generators that are passed into the first argument, if it is a function.
- `:authorize?` - Passed through to the changeset
- `:context` - Passed through to the changeset
- `:after_action` - A one argument function that takes the result and returns
  a new result to run after the record is created.

### Ash.Generator.seed_input/2 (function)

Generate input meant to be passed into `Ash.Seed.seed!/2`.

A map of custom `StreamData` generators can be provided to add to or overwrite the generated input,
for example: `Ash.Generator.seed_input(Post, %{text: StreamData.constant("Post")})`

### Ash.Generator.seed_many!/3 (function)

Generates an input `n` times, and passes them all to seed, returning the list of seeded items.

### Ash.Generator.sequence/3 (function)

Generate globally unique values.

This is useful for generating values that are unique within a given test or processes that it spawns, such as email addresses,
or for generating values that are unique across a single resource, such as identifiers. The values will be unique
for anything using the same sequence name, **within the same test**.

>

### Not Globally Unique - Ash.Generator.sequence/3 (function)

> The lifecycle of this generator is tied to the process that initially starts it. In general,
> that will be the test. In the rare case where you are running async processes that need to share a sequence
> that is not created in the test process, you can initialize a sequence in the test using `initialize_sequence/1`.
>
> If you need a globally unique value, use a value like `System.unique_integer([:positive])` in your values instead.
>
> For example:
>
> ```elixir
> StreamData.repeatedly(fn -> "email#{System.unique_integer([:positive])}@example.com" end)
> ```

Example:

    Ash.Generator.sequence(:unique_email, fn i -> "user#{i}@example.com" end) |> Enum.take(3)
    iex> ["user0@example.com", "user1@example.com", "user2@example.com"]

### Using a different sequencer - Ash.Generator.sequence/3 (function)

By default we use an incrementing integer starting at 0. However, if you want to use something else, you can provide
your own sequencer. The initial value will be `nil`, which you can use to detect that you are the start of the sequence.

Example:

    Ash.Generator.sequence(:unique_email, fn i -> "user#{i}@example.com" end, fn num -> (num || 1) - 1 end) |> Enum.take(3)
    iex> ["user0@example.com", "user-1@example.com", "user-2@example.com"]

### Ash.Generator.stop_once/1 (function)

Stops the agent for a `once/2`.

See `once/2` for more.

### Ash.Generator.stop_sequence/1 (function)

Stops the agent for a sequence.

See `sequence/3` for more.

### Ash.Generator.stream_data/0 (type)

An instance of `StreamData`, gotten from one of the functions in that module.

### Ash.Seed (module)

Helpers for seeding data, useful for quickly creating lots of data either for database seeding or testing.

Important: this bypasses resource actions, and goes straight to the data layer. No action changes or validations are run.
The only thing that it does at the moment is ensure that default values for attributes are set, it does not validate
that required attributes are set (although the data layer may do that for you, e.g with ash_postgres).

### Ash.Seed.keep_nil/0 (function)

Returns `:__keep_nil__`, allowing to ensure a default value is not used when you want the value to be `nil`.

### Ash.Seed.seed!/1 (function)

Seed using a record (instance of a resource) as input.

If the passed in struct was retrieved from the data layer already (i.e already seeded),
then it is returned and nothing is done. Otherwise, the attributes and relationships are
used as input to `seed/2`, after having any `%Ash.NotLoaded{}` values stripped out.

Any `nil` values will be overwritten with their default values. To avoid this, either use `seed/2`
in which providing the key will have it not set the default values.
If you want to force `nil` to be accepted and prevent the default value from being set, use the
`keep_nil/0` function provided here, which returns `:__keep_nil__`. Alternatively, use
`seed!(Post, %{text: nil})`.

See `seed!/2` for more information.

### Ash.Seed.seed!/3 (function)

Performs a direct call to the data layer of a resource with the provided input.

If a list is provided as input, then you will get back that many results.

To set a tenant, use the tenant option.

### Ash.Seed.skip/0 (function)

Returns `:__skip__`, allowing to ensure no value is generated for a given field when used with generators.

### Ash.Seed.update!/3 (function)

Usage is the same as `seed!/2`, but it will update an existing record.

For multitenant resources, tenant will be extracted from the record if
not provided in opts.

### Ash.Seed.upsert!/2 (function)

Performs an upsert operation on the data layer of a resource with the provided input and identities.
The usage is the same as `seed!/1`, but it will update the record if it already exists.

```elixir
Ash.Seed.upsert!(%User{email: 'test@gmail.com', name: 'Test'}, identity: :email)
```

### Ash.Seed.upsert!/3 (function)

Usage is the same as `seed!/2`, but it will update the record if it already exists based on the identities.

### Ash.Test (module)

Testing helpers for Ash.

### Ash.Test.assert_has_error/4 (function)

Assert that the given changeset, query, or action input has a matching error.

Use the optional second argument to assert that the errors (all together) are of a specific class.

### Ash.Test.refute_has_error/4 (function)

Refute that the given changeset, query, or action input has a matching error.

The `error_class` argument has been deprecated and should not be used.

### Ash.Test.strip_metadata/1 (function)

Clears the `__metadata__` field and the underlying ecto `__meta__` field

This allows for easier comparison of changeset/query results

### Ash.Tracer (behaviour)

A behaviour for implementing tracing for an Ash application.

### Ash.Tracer.get_span_context/0 (callback)

### Ash.Tracer.get_span_context/1 (function)

### Ash.Tracer.metadata/0 (type)

### Ash.Tracer.set_error/1 (callback)

### Ash.Tracer.set_error/2 (function)

### Ash.Tracer.set_error/2 (callback)

### Ash.Tracer.set_error/3 (function)

### Ash.Tracer.set_handled_error/2 (callback)

### Ash.Tracer.set_handled_error/3 (function)

### Ash.Tracer.set_metadata/2 (callback)

Set metadata for the current span.

This may be called multiple times per span, and should ideally merge with previous metadata.

### Ash.Tracer.set_metadata/3 (function)

### Ash.Tracer.set_span_context/1 (callback)

### Ash.Tracer.set_span_context/2 (function)

### Ash.Tracer.span/4 (macro)

### Ash.Tracer.span_type/0 (type)

### Ash.Tracer.start_span/2 (callback)

### Ash.Tracer.start_span/3 (function)

### Ash.Tracer.stop_span/0 (callback)

### Ash.Tracer.stop_span/1 (function)

### Ash.Tracer.t/0 (type)

### Ash.Tracer.telemetry_span/4 (macro)

### Ash.Tracer.trace_type?/1 (callback)

### Ash.Tracer.trace_type?/2 (function)

### Ash.Tracer.Simple (module)

A simple tracer that can send traces to the current process or call a module with the trace.

### Ash.Tracer.Simple.gather_spans/0 (function)

### Ash.Tracer.Simple.Span (module)

A span produced by `Ash.Tracer.Simple`

### Ash.Type (behaviour)

The `Ash.Type` behaviour is used to define a value type in Ash.

### Built in types - Ash.Type (behaviour)

- `:map` - `Ash.Type.Map`
- `:keyword` - `Ash.Type.Keyword`
- `:term` - `Ash.Type.Term`
- `:atom` - `Ash.Type.Atom`
- `:tuple` - `Ash.Type.Tuple`
- `:string` - `Ash.Type.String`
- `:integer` - `Ash.Type.Integer`
- `:file` - `Ash.Type.File`
- `:float` - `Ash.Type.Float`
- `:duration_name` - `Ash.Type.DurationName`
- `:function` - `Ash.Type.Function`
- `:boolean` - `Ash.Type.Boolean`
- `:struct` - `Ash.Type.Struct`
- `:uuid` - `Ash.Type.UUID`
- `:uuid_v7` - `Ash.Type.UUIDv7`
- `:binary` - `Ash.Type.Binary`
- `:date` - `Ash.Type.Date`
- `:time` - `Ash.Type.Time`
- `:time_usec` - `Ash.Type.TimeUsec`
- `:decimal` - `Ash.Type.Decimal`
- `:ci_string` - `Ash.Type.CiString`
- `:naive_datetime` - `Ash.Type.NaiveDatetime`
- `:utc_datetime` - `Ash.Type.UtcDatetime`
- `:utc_datetime_usec` - `Ash.Type.UtcDatetimeUsec`
- `:datetime` - `Ash.Type.DateTime`
- `:url_encoded_binary` - `Ash.Type.UrlEncodedBinary`
- `:union` - `Ash.Type.Union`
- `:module` - `Ash.Type.Module`
- `:vector` - `Ash.Type.Vector`

### Lists/Arrays - Ash.Type (behaviour)

To specify a list of values, use `{:array, Type}`. Arrays are special, and have special constraints:

- `:items` (`t:term/0`) - Constraints for the elements of the list. See the contained type's docs for more.

- `:min_length` (`t:non_neg_integer/0`) - A minimum length for the items.

- `:max_length` (`t:non_neg_integer/0`) - A maximum length for the items.

- `:nil_items?` (`t:boolean/0`) - Whether or not the list can contain nil items. The default value is `false`.

- `:remove_nil_items?` (`t:boolean/0`) - Whether or not to remove the nil items from the list instead of adding errors. The default value is `false`.

- `:empty_values` (list of `t:term/0`) - A set of values that, if encountered, will be considered an empty list. The default value is `[""]`.

### Defining Custom Types - Ash.Type (behaviour)

Generally you add `use Ash.Type` to your module (it is possible to add `@behaviour
Ash.Type` and define everything yourself, but this is more work and error-prone).

Another option is to use `Ash.Type.NewType`, which supports defining a new type that
is the combination of an existing type and custom constraints.
This can be helpful when defining a custom attribute (e.g. struct) for a resource.

Simple example of a float custom type

```elixir
defmodule GenTracker.AshFloat do
  use Ash.Type

  @impl Ash.Type
  def storage_type(_), do: :float

  @impl Ash.Type
  def cast_input(nil, _), do: {:ok, nil}
  def cast_input(value, _) do
    Ecto.Type.cast(:float, value)
  end

  @impl Ash.Type
  def cast_stored(nil, _), do: {:ok, nil}
  def cast_stored(value, _) do
    Ecto.Type.load(:float, value)
  end

  @impl Ash.Type
  def dump_to_native(nil, _), do: {:ok, nil}
  def dump_to_native(value, _) do
    Ecto.Type.dump(:float, value)
  end
end
```

### Overriding the {:array, type} behaviour - Ash.Type (behaviour)

By defining the `*_array` versions of `cast_input`, `cast_stored`, `dump_to_native` and `apply_constraints`, you can
override how your type behaves as a collection. This is how the features of embedded
resources are implemented. No need to implement them unless you wish to override the
default behaviour. Your type is responsible for handling nil values in each callback as well.

All the Ash built-in types are implemented with `use Ash.Type` so they are good
examples to look at to create your own `Ash.Type`.

### Short names - Ash.Type (behaviour)

You can define short `:atom_names` for your custom types by adding them to your Ash configuration:

```elixir
config :ash, :custom_types, [ash_float: GenTracker.AshFloat]
```

Doing this will require a recompilation of the `:ash` dependency which can be triggered by calling:

```bash
$ mix deps.compile ash --force
```

### Composite Types - Ash.Type (behaviour)

Composite types are composite _in the data layer_. Many data layers do not support this, but some (like AshPostgres),
do. To define a composite type, the following things should be true:

1. A casted value should be a map or struct, for example for a point: `%{x: 1, y: 2}`
2. The data layer must support composite types, and the data layer representation will be a tuple, i.e `{1, 2}`
3. Define `def composite?(_), do: true` in your composite type
4. Define the type & constraints of each item in the tuple, and its name in the map
   representation: `def composite_types(_), do: [{:x, :integer, []}, {:y, :integer, []}]`.
   You can also define a storage key for each item in the tuple, if the underlying type implementation
   has a different reference for an item, i.e `def composite_types(_), do: [{:x, :x_coord, :integer, []}, {:y, :y_coord, :integer, []}]`

With the above implemented, your composite type can be used in expressions, for example:

```elixir
Ash.Query.filter(expr(coordinates[:x] == 1))
```

And you can also _construct_ composite types in expressions, for example:

```elixir
calculate :coordinates, :composite_point, expr(
  composite_type(%{x: some_value, y: some_other_value}, Point)
)
```

### Constraints - Ash.Type (behaviour)

Constraints are a way of validating an input type. This validation can be used in both attributes and arguments. The kinds of constraints you can apply depends on the type of data. You can find all types in `Ash.Type` . Each type has its own page on which the available constraints are listed. For example in `Ash.Type.String` you can find 5 constraints:

- `:max_length`
- `:min_length`
- `:match`
- `:trim?`
- `:allow_empty?`

You can also discover these constraints from iex:

```bash
$ iex -S mix
iex(1)> Ash.Type.String.constraints
[
  max_length: [
    type: :non_neg_integer,
    doc: "Enforces a maximum length on the value"
  ],
  min_length: [
    type: :non_neg_integer,
    doc: "Enforces a minimum length on the value"
  ],
  match: [
    type: {:custom, Ash.Type.String, :match, []},
    doc: "Enforces that the string matches a passed in regex"
  ],
  trim?: [type: :boolean, doc: "Trims the value.", default: true],
  allow_empty?: [
    type: :boolean,
    doc: "If false, the value is set to `nil` if it's empty.",
    default: false
  ]
]
```

### Attribute example - Ash.Type (behaviour)

To show how constraints can be used in a attribute, here is an example attribute describing a username:

```elixir
defmodule MyProject.MyDomain.Account do
  # ...

  code_interface do
    define :create, action: :create
  end

  actions do
    default [:create, :read, :update, :destroy]
  end

  attributes do
    uuid_primary_key :id

    attribute :username, :string do
      constraints [
        max_length: 20,
        min_length: 3,
        match: ~r/^[a-z_-]*$/,
        trim?: true,
        allow_empty?: false
      ]
    end
  end

  # ...
end
```

If, when creating or updating this attribute, one of the constraints are not met, an error will be given telling you which constraint was broken. See below:

```elixir
iex(1)> MyProject.MyDomain.Account.create!(%{username: "hi"})

** (Ash.Error.Invalid) Invalid Error

* Invalid value provided for username: length must be greater than or equal to 3.

"hi"

iex(2)> MyProject.MyDomain.Account.create!(%{username: "Hello there this is a long string"})

** (Ash.Error.Invalid) Invalid Error

* Invalid value provided for username: length must be less than or equal to 20.

"Hello there this is a long string"

iex(3)> MyProject.MyDomain.Account.create!(%{username: "hello there"})
** (Ash.Error.Invalid) Invalid Error

* Invalid value provided for username: must match the pattern ~r/^[a-z_-]*$/.

"hello there"

iex(4)> MyProject.MyDomain.Account.create!(%{username: ""})
** (Ash.Error.Invalid) Invalid Error

* attribute title is required
```

It will give you the resource as usual on successful requests:

```elixir
iex(5)> MyProject.MyDomain.Account.create!(%{username: "hello"})
#MyProject.MyDomain.Account<
  __meta__: #Ecto.Schema.Metadata<:loaded, "account">,
  id: "7ba467dd-277c-4916-88ae-f62c93fee7a3",
  username: "hello",
  ...
>
```

### Ash.Type.apply_atomic_constraints/2 (callback)

Applies type constraints within an expression.

### Ash.Type.apply_atomic_constraints/3 (function)

Applies a types constraints to an expression.

This delegates to the underlying types implementation of `c:apply_atomic_constraints/2`.

### Ash.Type.apply_atomic_constraints_array/2 (callback)

Applies type constraints to a list of values within an expression. See `c:apply_atomic_constraints/2` for more.

### Ash.Type.apply_constraints/2 (callback)

Called after casting, to apply additional constraints to the value.

### Ash.Type.apply_constraints/3 (function)

Confirms if a casted value matches the provided constraints.

### Ash.Type.apply_constraints_array/2 (callback)

Called after casting a list of values, to apply additional constraints to the value.

If not defined, `c:apply_constraints/2` is called for each item.

### Ash.Type.array_constraints/0 (callback)

Returns a `Spark.Options` spec for the additional constraints supported when used in a list.

### Ash.Type.array_constraints/1 (function)

Gets the array constraints for a type

### Ash.Type.ash_type?/1 (function)

Returns true if the value is a builtin type or adopts the `Ash.Type` behaviour

### Ash.Type.builtin?/1 (function)

Returns true if the type is an ash builtin type

### Ash.Type.can_load?/1 (callback)

Whether or not `c:load/4` can be used. Defined automatically

### Ash.Type.can_load?/2 (function)

Returns true if the type supports nested loads

### Ash.Type.cast_atomic/2 (callback)

Casts a value within an expression.

For instance, if you had a type like `:non_neg_integer`, you might do:

```elixir
def cast_atomic(value, _constraints)  do
  expr(
    if ^value < 0 do
      error(Ash.Error.Changes.InvalidChanges, %{message: "must be positive", value: ^value})
    else
      value
    end
  )
end
```

### Ash.Type.cast_atomic/3 (function)

Modifies an expression to apply a type's casting logic to the value it produces.

This delegates to the underlying types implementation of `c:cast_atomic/2`.

### Ash.Type.cast_atomic_array/2 (callback)

Casts a list of values within an expression. See `c:cast_atomic/2` for more.

### Ash.Type.cast_in_query?/1 (callback)

Whether or not data layers that build queries should attempt to type cast values of this type while doing so.

### Ash.Type.cast_in_query?/2 (function)

Returns `true` if the type should be cast in underlying queries

### Ash.Type.cast_input/2 (callback)

Attempt to cast unknown, potentially user-provided input, into a valid instance of the type.

### Ash.Type.cast_input/3 (function)

Casts input (e.g. unknown) data to an instance of the type, or errors

Maps to `Ecto.Type.cast/2`

### Ash.Type.cast_input_array/2 (callback)

Attempt to cast a list of unknown, potentially user-provided inputs, into a list of valid instances of type.

This callback allows to define types that are "collection-aware", i.e an integer that is unique whenever
it appears in a list.

If not defined, `c:cast_input/2` is called for each item.

### Ash.Type.cast_stored/2 (callback)

Attempt to load a stored value from the data layer into a valid instance of the type.

### Ash.Type.cast_stored/3 (function)

Casts a value from the data store to an instance of the type, or errors

Maps to `Ecto.Type.load/2`

### Ash.Type.cast_stored_array/2 (callback)

Attempt to load a list of stored values from the data layer into a list of valid instances of the type.

If not defined, `c:cast_stored/2` is called for each item.

### Ash.Type.coerce/2 (callback)

Attempt to coerce unknown, potentially user-provided input, into a valid instance of the type.

### Coercion vs Casting - Ash.Type.coerce/2 (callback)

Coercion can be summed up as a more "insistent" form of casting. It means "we really want to use
this value as this type, so please try to convert it to that type". This is used in expressions as
opposed to `cast_input`. For example, the value `10`, if passed into `Ash.Type.cast_input(:string, 10)`
would fail to cast. However, if used in the following expression: `expr(type(10, :string) <> " minutes")`
the `10` would be "coerced" (using `to_string/1`) into `"10"`.

By default, coercion uses `cast_input/2` unless

### Ash.Type.coerce/3 (function)

Coerces input (e.g. unknown) data to an instance of the type, or errors.

See `c:Ash.Type.coerce/2`

### Ash.Type.composite?/1 (callback)

Return true if the type is a composite type, meaning it is made up of one or more values. How this works is up to the data layer.

For example, `AshMoney` provides a type that is composite with a "currency" and an "amount".

### Ash.Type.composite?/2 (function)

Returns true if the type is a composite type

### Ash.Type.composite_types/1 (callback)

Information about each member of the composite type, if it is a composite type

An example given the `AshMoney` example listed above:

`[{:currency, :string, []}, {:amount, :decimal, []}]`

### Ash.Type.composite_types/2 (function)

Returns the wrapped composite types

### Ash.Type.constraints/0 (callback)

Returns a `Spark.Options` spec for the constraints supported by the type.

### Ash.Type.constraints/0 (type)

A keyword list of constraints for a type

### Ash.Type.constraints/1 (function)

Returns the constraint schema for a type

### Ash.Type.custom_apply_constraints_array?/0 (callback)

Whether or not an `c:apply_constraints_array/2` callback has been defined. This is defined automatically.

### Ash.Type.describe/1 (callback)

Describes a type given its constraints. Can be used to generate docs, for example.

### Ash.Type.describe/2 (function)

Calls the type's `describe` function with the given constraints

### Ash.Type.determine_types/2 (function)

Determine types for a given function or operator.

### Ash.Type.dump_to_embedded/2 (callback)

Transform a valid instance of the type into a format that can be JSON encoded.

### Ash.Type.dump_to_embedded/3 (function)

Casts a value from the Elixir type to a value that can be embedded in another data structure.

Embedded resources expect to be stored in JSON, so this allows things like UUIDs to be stored
as strings in embedded resources instead of binary.

### Ash.Type.dump_to_embedded_array/2 (callback)

Transform a list of valid instances of the type into a format that can be JSON encoded.

If not defined, `c:dump_to_embedded/2` is called for each item.

### Ash.Type.dump_to_native/2 (callback)

Transform a valid instance of the type into a format that the data layer can store.

### Ash.Type.dump_to_native/3 (function)

Casts a value from the Elixir type to a value that the data store can persist

Maps to `Ecto.Type.dump/2`

### Ash.Type.dump_to_native_array/2 (callback)

Transform a list of valid instance of the type into a format that the data layer can store.

If not defined, `c:dump_to_native/2` is called for each item.

### Ash.Type.ecto_type/0 (callback)

The underlying Ecto.Type.

### Ash.Type.ecto_type/1 (function)

Returns the ecto compatible type for an Ash.Type.

If you `use Ash.Type`, this is created for you. For builtin types
this may return a corresponding ecto builtin type (atom)

### Ash.Type.embedded?/0 (callback)

Whether or not the type is an embedded resource. This is defined by embedded resources, you should not define this.

### Ash.Type.embedded_type?/1 (function)

Returns true if the type is an embedded resource

### Ash.Type.equal?/2 (callback)

Determine if two valid instances of the type are equal.

_Do not define this_ if `==` is sufficient for your type. See `c:simple_equality?/0` for more.

### Ash.Type.equal?/3 (function)

Determines if two values of a given type are equal.

Maps to `Ecto.Type.equal?/3`

### Ash.Type.error/0 (type)

An error value that can be returned from various callbacks

### Ash.Type.evaluate_operator/1 (callback)

The implementation for any overloaded implementations.

### Ash.Type.generator/1 (callback)

An Enumerable that produces valid instances of the type.

This can be used for property testing, or generating valid inputs for seeding.
Typically you would use `StreamData` for this.

### Ash.Type.generator/2 (function)

Returns the StreamData generator for a given type

### Ash.Type.get_rewrites/4 (callback)

Gets any "rewrites" necessary to apply a given load statement.

This is a low level tool used when types can contain instances of resources. You generally
should not need to know how this works. See `Ash.Type.Union` and `Ash.Type.Struct` for examples
if you are trying to write a similar type.

### Ash.Type.get_rewrites/5 (function)

Gets the load rewrites for a given type, load, calculation and path.

This is used for defining types that support a nested load statement.
See the embedded type and union type implementations for examples of how
to use this.

### Ash.Type.get_type/1 (function)

Gets the type module for a given short name or module

### Ash.Type.get_type!/1 (function)

Gets the type module for a given short name or module,
ensures that it is a valid `type`

### Raises - Ash.Type.get_type!/1 (function)

- `RuntimeError`: If the provided type module is not found or invalid.

### Ash.Type.handle_change/3 (callback)

React to a changing value. This could be used, for example, to have a type like `:strictly_increasing_integer`.

### Ash.Type.handle_change/4 (function)

Process the old casted values alongside the new casted values.

This is leveraged by embedded types to know if something is being updated
or destroyed. This is not called on creates.

### Ash.Type.handle_change_array/3 (callback)

React to a changing list of values. This could be used, for example, to have a type like `:unique_integer`, which when used in a list all items must be unique.

If not defined, `c:handle_change/3` is called for each item with a `nil` old value.

### Ash.Type.handle_change_array?/0 (callback)

Whether or not a custom `c:handle_change_array/3` has been defined by the type. Defined automatically.

### Ash.Type.handle_change_array?/1 (function)

Handles the change of a given array of values for an attribute change. Runs after casting.

### Ash.Type.include_source/2 (callback)

Add the source changeset to the constraints, in cases where it is needed for type casting logic

### Ash.Type.include_source/3 (function)

Provides the changeset, action_input or query to the type, to potentially store in its constraints.

This is used for embedded types to allow accessing the parent changeset in certain cases.

### Ash.Type.init/1 (callback)

Useful for typed data layers (like ash_postgres) to instruct them not to attempt to cast input values.

You generally won't need this, but it can be an escape hatch for certain cases.

### Ash.Type.init/2 (function)

Initializes the constraints according to the underlying type

### Ash.Type.load/4 (callback)

Applies a load statement through a list of values.

This allows types to support load statements, like `Ash.Type.Union`, embedded resources,
or the `Ash.Type.Struct` when it is an `instance_of` a resource.

### Ash.Type.load/5 (function)

Apply a load statement to a value.

This is used for types that can be "loaded through". For example, maps, unions and structs.
If they have keys that are embedded types, for example, we want to be able to apply a load
statements to their contents.

### Ash.Type.load_context/0 (type)

The context that is provided to the `c:load/4` callback.

### Ash.Type.loaded?/4 (callback)

Checks if the given path has been loaded on the type.

### Ash.Type.loaded?/5 (function)

Checks if a given path has been loaded on a type.

This is used to "load through" types. For more see `load/5`.

### Ash.Type.matches_type?/2 (callback)

Whether or not the value a valid instance of the type.

### Ash.Type.matches_type?/3 (function)

Detects as a best effort if an arbitrary value matches the given type

### Ash.Type.may_support_atomic_update?/1 (callback)

Whether or not a value with given constraints may support being cast atomic

Defaults to checking if `cast_atomic/2` is defined on the type.

### Ash.Type.merge_load/4 (callback)

Merges a load statement with an existing load statement for the type.

### Ash.Type.merge_load/5 (function)

Merges two load statements for a given type.

This is used to "load through" types. For more see `load/5`.

### Ash.Type.merge_load_context/0 (type)

The context that is provided to the `c:merge_load/4` callback.

### Ash.Type.operator_overloads/0 (callback)

A map of operators with overloaded implementations.

These will only be honored if the type is placed in `config :ash, :known_types, [...Type]`

A corresponding `evaluate_operator/1` clause should match.

### Ash.Type.prepare_change/3 (callback)

Prepare a change, given the old value and the new uncasted value.

### Ash.Type.prepare_change/4 (function)

Process the old casted values alongside the new *un*casted values.

This is leveraged by embedded types to know if something is being updated
or destroyed. This is not called on creates.

### Ash.Type.prepare_change_array/3 (callback)

Prepare a changing list of values, given the old value and the new uncasted value.

If not defined, `c:prepare_change/3` is called for each item with a `nil` old value.

### Ash.Type.prepare_change_array?/0 (callback)

Whether or not a custom `c:prepare_change_array/3` has been defined by the type. Defined automatically.

### Ash.Type.prepare_change_array?/1 (function)

Prepares a given array of values for an attribute change. Runs before casting.

### Ash.Type.rewrite/3 (callback)

Apply any "rewrites" necessary to provide the results of a load statement to calculations that depended on a given load.

This is a low level tool used when types can contain instances of resources. You generally
should not need to know how this works. See `Ash.Type.Union` and `Ash.Type.Struct` for examples
if you are trying to write a similar type.

### Ash.Type.rewrite/4 (function)

Applies rewrites to a given value.

This is used for defining types that support a nested load statement.
See the embedded type and union type implementations for examples of how
to use this.

### Ash.Type.short_names/0 (function)

Returns the list of available type short names

### Ash.Type.simple_equality?/0 (callback)

Whether or not `==` can be used to compare instances of the type.

This is defined automatically to return `false` if `c:equal?/2` is defined.

Types that cannot be compared using `==` incur significant runtime costs when used in certain ways.
For example, if a resource's primary key cannot be compared with `==`, we cannot do things like key
a list of records by their primary key. Implementing `c:equal?/2` will cause various code paths to be considerably
slower, so only do it when necessary.

### Ash.Type.simple_equality?/1 (function)

Determines if a type can be compared using the `==` operator.

### Ash.Type.storage_type/0 (callback)

The storage type, which should be known by a data layer supporting this type.

Use `c:storage_type/1`, as this will be deprecated in the future.

### Ash.Type.storage_type/1 (callback)

The storage type, which should be known by a data layer supporting this type.

### Ash.Type.storage_type/2 (function)

Returns the _underlying_ storage type (the underlying type of the _ecto type_ of the _ash type_)

### Ash.Type.t/0 (type)

A valid Ash.Type

### Ash.Type.Atom (module)

Stores an atom as a string in the database

A builtin type that can be referenced via `:atom`

### Constraints - Ash.Type.Atom (module)

- `:one_of` (`t:term/0`) - Allows constraining the value of an atom to a pre-defined list

- `:unsafe_to_atom?` (`t:boolean/0`) - Allows casting to atoms that don't yet exist in the system. See https://security.erlef.org/secure_coding_and_deployment_hardening/atom_exhaustion.html for more. The default value is `false`.

### Ash.Type.Atom.handle_change?/0 (function)

### Ash.Type.Atom.prepare_change?/0 (function)

### Ash.Type.Binary (module)

Represents a binary.

A builtin type that can be referenced via `:binary`

### Ash.Type.Binary.handle_change?/0 (function)

### Ash.Type.Binary.prepare_change?/0 (function)

### Ash.Type.Boolean (module)

Represents a boolean.

A builtin type that can be referenced via `:boolean`

### Ash.Type.Boolean.handle_change?/0 (function)

### Ash.Type.Boolean.prepare_change?/0 (function)

### Ash.Type.CiString (module)

Stores a case insensitive string in the database

See `Ash.CiString` for more information.

A builtin type that can be referenced via `:ci_string`

### Constraints - Ash.Type.CiString (module)

- `:max_length` (`t:non_neg_integer/0`) - Enforces a maximum length on the value

- `:min_length` (`t:non_neg_integer/0`) - Enforces a minimum length on the value

- `:match` - Enforces that the string matches a passed in regex

- `:trim?` (`t:boolean/0`) - Trims the value. The default value is `true`.

- `:allow_empty?` (`t:boolean/0`) - Sets the value to `nil` if it's empty. The default value is `false`.

- `:casing` - Lowercases or uppercases the value, fully discarding case information.
  For example, if you don't set this, a value of `FrEd` could be saved to the data layer.
  `FrEd` and `fReD` would still compare as equal, but the original casing information is retained.
  In many cases, this is what you want. In some cases, however, you want to remove all case information.
  For example, in an email, you may want to support a user inputting an upper case letter, but discard it
  when saved.
  Valid values are :upper, :lower, nil The default value is `nil`.

### Ash.Type.CiString.handle_change?/0 (function)

### Ash.Type.CiString.match/1 (function)

### Ash.Type.CiString.prepare_change?/0 (function)

### Ash.Type.Comparable (module)

Helpers for working with `Comparable`

### Ash.Type.Comparable.defcomparable/3 (macro)

### Ash.Type.Date (module)

Represents a date in the database

A builtin type that can be referenced via `:date`

### Ash.Type.Date.handle_change?/0 (function)

### Ash.Type.Date.prepare_change?/0 (function)

### Ash.Type.DateTime (module)

Represents a datetime, with configurable precision and timezone.

A builtin type that can be referenced via `:datetime`

### Constraints - Ash.Type.DateTime (module)

- `:precision` - Valid values are :microsecond, :second The default value is `:second`.

- `:cast_dates_as` - Valid values are :start_of_day, :error The default value is `:start_of_day`.

- `:timezone` - Valid values are :utc The default value is `:utc`.

### Ash.Type.DateTime.handle_change?/0 (function)

### Ash.Type.DateTime.prepare_change?/0 (function)

### Ash.Type.Decimal (module)

Represents a decimal.

A builtin type that can be referenced via `:decimal`

### Constraints - Ash.Type.Decimal (module)

- `:max` - Enforces a maximum on the value

- `:min` - Enforces a minimum on the value

- `:greater_than` - Enforces a minimum on the value (exclusive)

- `:less_than` - Enforces a maximum on the value (exclusive)

### Ash.Type.Decimal.handle_change?/0 (function)

### Ash.Type.Decimal.prepare_change?/0 (function)

### Ash.Type.DurationName (module)

An interval of time, primarily meant to be used in expression functions

Valid intervals are (as strings or atoms): [:year, :month, :week, :day, :hour, :minute, :second, :millisecond, :microsecond]

### Ash.Type.DurationName.handle_change?/0 (function)

### Ash.Type.DurationName.prepare_change?/0 (function)

### Ash.Type.DurationName.t/0 (type)

### Ash.Type.Enum (behaviour)

A type for abstracting enums into a single type.

For example, your existing attribute might look like:

```elixir
attribute :status, :atom, constraints: [one_of: [:open, :closed]]
```

But as that starts to spread around your system, you may find that you want
to centralize that logic. To do that, use this module to define an Ash type
easily:

```elixir
defmodule MyApp.TicketStatus do
  use Ash.Type.Enum, values: [:open, :closed]
end
```

Then, you can rewrite your original attribute as follows:

```elixir
attribute :status, MyApp.TicketStatus
```

Valid values are:

- The atom itself, e.g `:open`
- A string that matches the atom, e.g `"open"`
- A string that matches the atom after being downcased, e.g `"OPEN"` or `"oPeN"`
- A string that matches the stringified, downcased atom, after itself being downcased.
  This allows for enum values like `:Open`, `:SomeState` and `:Some_State`

### Custom input values - Ash.Type.Enum (behaviour)

If you need to accept inputs beyond those described above while still mapping them to one
of the enum values, you can override the `match/1` callback.

For example, if you want to map both the `:half_empty` and `:half_full` states to the same enum
value, you could implement it as follows:

```elixir
defmodule MyApp.GlassState do
  use Ash.Type.Enum, values: [:empty, :half_full, :full]

  def match(:half_empty), do: {:ok, :half_full}
  def match("half_empty"), do: {:ok, :half_full}
  def match(value), do: super(value)
end
```

In the provided example, if no additional value is matched, `super(value)` is called, invoking
the default implementation of `match/1`. This approach is typically suitable if you only aim to
extend default matching rather than completely reimplementing it.

### Caveats - Ash.Type.Enum (behaviour)

Additional input values are not exposed in derived interfaces. For example, `HALF_EMPTY` will not
be present as a possible enum value when using `ash_graphql`.

Moreover, only explicitly matched values are mapped to the enum value. For instance,
`"HaLf_emPty"` would not be accepted by the code provided earlier. If case normalization is
needed for additional values, it must be explicitly implemented.

### Value labels and descriptions - Ash.Type.Enum (behaviour)

It's possible to associate a label and/or description for each value.

```elixir
defmodule MyApp.TicketStatus do
  use Ash.Type.Enum,
    values: [
      open: "An open ticket", # <- description only,
      escalated: [description: gettext("An escalated ticket")],
      follow_up: [label: gettext("Follow up")],
      closed: [description: gettext("A closed ticket"), label: gettext("Closed")]
    ]
end
```

Adding labels and descriptions can be helpful when displaying the Enum values to users.

This can be used by extensions to provide detailed descriptions of enum values.

The description of a value can be retrieved with `description/1`:

```elixir
MyApp.TicketStatus.description(:open)
iex> "An open ticket"
```

The label of a value can be retrieved with `label/1`:

```elixir
MyApp.TicketStatus.label(:closed)
iex> "Closed"
```

Both the description and label can be retrieved with `details/1`

```elixir
MyApp.TicketStatus.details(:closed)
iex> %{description: "A closed ticket", label: "Closed"}
```

### Ash.Type.Enum.description/1 (callback)

The description of the value, if existing

### Ash.Type.Enum.details/1 (callback)

The value detail map, if existing

### Ash.Type.Enum.label/1 (callback)

The label of the value, if existing

### Ash.Type.Enum.match/1 (callback)

finds the valid value that matches a given input term

### Ash.Type.Enum.match?/1 (callback)

true if a given term matches a value

### Ash.Type.Enum.values/0 (callback)

The list of valid values (not all input types that match them)

### Ash.Type.File (module)

A type that represents a file on the filesystem.

> #### Persistence {: .warning}
>
> This type does not support persisting via `Ash.DataLayer`.
>
> It is mainly intended to be used in
> [arguments](dsl-ash-resource.html#actions-action-argument).

### Valid values to cast - Ash.Type.File (module)

This type can cast multiple types of values:

- itself
- `Plug.Upload`
- Any value that implements the `Ash.Type.File.Source` protocol.

### Ash.Type.File.from_io/1 (function)

Create a file from an `IO.device()`

### Example - Ash.Type.File.from_io/1 (function)

iex> path = "README.md"
...> {:ok, device} = File.open(path)
...> Ash.Type.File.from_io(device)
%Ash.Type.File{source: device, implementation: Ash.Type.File.IO}

### Ash.Type.File.from_path/1 (function)

Create a file from a path.

### Example - Ash.Type.File.from_path/1 (function)

iex> path = "README.md"
...> Ash.Type.File.from_path(path)
%Ash.Type.File{source: "README.md", implementation: Ash.Type.File.Path}

### Ash.Type.File.handle_change?/0 (function)

### Ash.Type.File.open/2 (function)

Open the file with the given `modes`.

This function will delegate to the `open/2` function on the `implementation`.

For details on the `modes` argument, see the `File.open/2` documentation.

### Example - Ash.Type.File.open/2 (function)

iex> path = "README.md"
...> file = Ash.Type.File.from_path(path)
...> Ash.Type.File.open(file, [:read])
...> # => {:ok, #PID<0.109.0>}

### Ash.Type.File.path/1 (function)

Returns the path to the file.

Not every implementation will support this operation. If the implementation
does not support this operation, then `{:error, :not_supported}` will be
returned. In this case, use the `open/2` function to access the file.

### Example - Ash.Type.File.path/1 (function)

iex> path = "README.md"
...> file = Ash.Type.File.from_path(path)
...> Ash.Type.File.path(file)
{:ok, "README.md"}

### Ash.Type.File.prepare_change?/0 (function)

### Ash.Type.File.t/0 (type)

### Ash.Type.File.Implementation (behaviour)

Behaviour for file implementations that are compatible with `Ash.Type.File`.

### Ash.Type.File.Implementation.error/0 (type)

Errors returned by the implementation.

### Ash.Type.File.Implementation.open/2 (callback)

Open `IO.device()` for the file.

See `Ash.Type.File.open/2`

The return pid must point to a process following the
[Erlang I/O Protocol](https://www.erlang.org/doc/apps/stdlib/io_protocol.html)
like `StringIO` or `File`.

### Ash.Type.File.Implementation.path/1 (callback)

Return path of the file on disk.

See: `Ash.Type.File.path/1`

This callback is optional. If the file is not stored on disk, this callback
can be omitted.

### Ash.Type.File.Implementation.source/0 (type)

The source of the file the implementation operates on.

### Ash.Type.File.Implementation.t/0 (type)

Any `module()` implementing the `Ash.Type.File.Implementation` behaviour.

### Ash.Type.File.Source (protocol)

Protocol for allowing the casting of something into an `Ash.Type.File`.

### Usage - Ash.Type.File.Source (protocol)

```elixir
defmodule MyStruct do
  defstruct [:path]

  @behavior Ash.Type.File.Implementation

  @impl Ash.Type.File.Implementation
  def path(%__MODULE__{path: path}), do: {:ok, path}

  @impl Ash.Type.File.Implementation
  def open(%__MODULE__{path: path}, modes), do: File.open(path, modes)

  defimpl Ash.Type.File.Source do
    def implementation(%MyStruct{} = struct), do: {:ok, MyStruct}
  end
end
```

### Ash.Type.File.Source.implementation/1 (function)

Detect Implementation of the file.

Returns an `:ok` tuple with the implementation module if the file is supported
and `:error` otherwise.

### Ash.Type.File.Source.t/0 (type)

All the types that implement this protocol.

### Ash.Type.Float (module)

Represents a float (floating point number)

A builtin type that be referenced via `:float`

### Constraints - Ash.Type.Float (module)

- `:max` - Enforces a maximum on the value

- `:min` - Enforces a minimum on the value

- `:greater_than` - Enforces a minimum on the value (exclusive)

- `:less_than` - Enforces a maximum on the value (exclusive)

### Ash.Type.Float.handle_change?/0 (function)

### Ash.Type.Float.prepare_change?/0 (function)

### Ash.Type.Function (module)

Represents a function.

If the type would be dumped to a native format, `:erlang.term_to_binary(term, [:safe])` is used.

Please keep in mind, this is _NOT SAFE_ to use with external input.

More information available here: https://erlang.org/doc/man/erlang.html#binary_to_term-2

### Constraints - Ash.Type.Function (module)

- `:arity` (`t:pos_integer/0`) - Enforces a specific arity on the provided function

### Ash.Type.Function.handle_change?/0 (function)

### Ash.Type.Function.prepare_change?/0 (function)

### Ash.Type.Integer (module)

Represents a simple integer

A builtin type that can be referenced via `:integer`

### Constraints - Ash.Type.Integer (module)

- `:max` - Enforces a maximum on the value

- `:min` - Enforces a minimum on the value

### Ash.Type.Integer.handle_change?/0 (function)

### Ash.Type.Integer.prepare_change?/0 (function)

### Ash.Type.Keyword (module)

Represents a keyword list, stored as a `:map` in the database.

A builtin type that can be referenced via `:keyword_list`

- `:fields` (`t:keyword/0`) - Required. The types of the fields in the keyword, and their constraints.
  If constraints are specified, only those fields will be in the casted keyword.
  For example:
  fields: [
  amount: [
  type: :integer,
  description: "The amount of the transaction",
  constraints: [
  max: 10
  ]
  ],
  currency: [
  type: :string,
  allow_nil?: false,
  description: "The currency code of the transaction",
  constraints: [
  max_length: 3
  ]
  ]
  ]
  allow_nil? is true by default

  - `:type` (an `Ash.Type`) - Required.

  - `:description` (`t:String.t/0`)

  - `:allow_nil?` (`t:boolean/0`) - The default value is `true`.

  - `:constraints` (`t:keyword/0`) - The default value is `[]`.

### Ash.Type.Keyword.handle_change?/0 (function)

### Ash.Type.Keyword.prepare_change?/0 (function)

### Ash.Type.Map (module)

Represents a map stored in the database.

In postgres, for example, this represents binary encoded json

A builtin type that can be referenced via `:map`

- `:fields` (`t:keyword/0`) - The types of the fields in the map, and their constraints.
  If constraints are specified, only those fields will be in the casted map.
  For example:
  fields: [
  amount: [
  type: :integer,
  description: "The amount of the transaction",
  constraints: [
  max: 10
  ]
  ],
  currency: [
  type: :string,
  allow_nil?: false,
  description: "The currency code of the transaction",
  constraints: [
  max_length: 3
  ]
  ]
  ]
  allow_nil? is true by default

  - `:type` (an `Ash.Type`) - Required.

  - `:allow_nil?` (`t:boolean/0`) - The default value is `true`.

  - `:description` (`t:String.t/0`)

  - `:constraints` (`t:keyword/0`) - The default value is `[]`.

### Ash.Type.Map.handle_change?/0 (function)

### Ash.Type.Map.prepare_change?/0 (function)

### Ash.Type.Module (module)

Stores a module as a string in the database.

A builtin type that can be referenced via `:module`.

### Constraints - Ash.Type.Module (module)

- `:behaviour` (`t:atom/0`) - Allows constraining the module a one which implements a behaviour

- `:protocol` (`t:atom/0`) - Allows constraining the module a one which implements a protocol

### Ash.Type.Module.handle_change?/0 (function)

### Ash.Type.Module.prepare_change?/0 (function)

### Ash.Type.NaiveDatetime (module)

Represents a Naive datetime

A builtin type that can be referenced via `:naive_datetime`

### Ash.Type.NaiveDatetime.handle_change?/0 (function)

### Ash.Type.NaiveDatetime.prepare_change?/0 (function)

### Ash.Type.NewType (behaviour)

Allows defining a new type that is the combination of an existing type and custom constraints

A subtle difference between this type and its supertype (one that will almost certainly not matter
in any case) is that we use the `apply_constraints` logic of the underlying type in the same step
as `cast_input`. We do this because new types like these are, generally speaking, considering the constraint
application as part of the core type. Other types, if you simply do `Ash.Type.cast_input/3` you will not be
also applying their constraints.

### Options - Ash.Type.NewType (behaviour)

- `:subtype_of` - The type that this new type is a subtype of.
- `:constraints` - The constraints that this new type uses for the underlying type.
- `:lazy_init?` - If true, the `init/1` function will be called at runtime instead of compile time.
  Allows for recursive types.

For Example:

```elixir
defmodule MyApp.Types.SSN do
  use Ash.Type.NewType, subtype_of: :string, constraints: [match: ~r/regex for ssn/]
end

defmodule MyApp.Types.Metadata do
  use Ash.Type.NewType, subtype_of: :union, constraints: [types: [
    foo: [...],
    bar: [...]
  ]]
end
```

### Ash.Type.NewType.constraints/2 (function)

Returns the constraints schema.

### Ash.Type.NewType.lazy_init?/0 (callback)

Whether or not the type is lazy initialized (so needs to be initialized when fetching constraints)

### Ash.Type.NewType.new_type?/1 (function)

Returns true if the corresponding type is an Ash.Type.NewType

### Ash.Type.NewType.subtype_constraints/0 (callback)

Returns the underlying subtype constraints

### Ash.Type.NewType.subtype_of/0 (callback)

Returns the type that the NewType is a subtype of.

### Ash.Type.NewType.subtype_of/1 (function)

Returns the type that the given newtype is a subtype of

### Ash.Type.NewType.t/0 (type)

### Ash.Type.NewType.type_constraints/2 (callback)

Returns the modified NewType constraints

### Ash.Type.String (module)

Stores a string in the database.

A built-in type that can be referenced via `:string`.

By default, values are trimmed and empty values are set to `nil`.
You can use the `allow_empty?` and `trim?` constraints to change these behaviors.

### Constraints - Ash.Type.String (module)

- `:max_length` (`t:non_neg_integer/0`) - Enforces a maximum length on the value

- `:min_length` (`t:non_neg_integer/0`) - Enforces a minimum length on the value

- `:match` - Enforces that the string matches a passed in regex

- `:trim?` (`t:boolean/0`) - Trims the value. The default value is `true`.

- `:allow_empty?` (`t:boolean/0`) - If false, the value is set to `nil` if it's empty. The default value is `false`.

### Ash.Type.String.handle_change?/0 (function)

### Ash.Type.String.prepare_change?/0 (function)

### Ash.Type.Struct (module)

Represents a struct.

Use the `instance_of` constraint to specify that it must be an instance of a specific struct.

This cannot be loaded from a database unless the `instance_of` constraint is provided.
If not, it can only be used to cast input, i.e for arguments.

### Constraints - Ash.Type.Struct (module)

- `:instance_of` (`t:atom/0`) - The module the struct should be an instance of

- `:preserve_nil_values?` (`t:boolean/0`) - If set to true, when storing, nil values will be kept. Otherwise, nil values will be omitted. The default value is `false`.

- `:fields` (`t:keyword/0`) - The types of the fields in the struct, and their constraints.
  For example:
  fields: [
  amount: [
  type: :integer,
  description: "The amount of the transaction",
  constraints: [
  max: 10
  ]
  ],
  currency: [
  type: :string,
  allow_nil?: false,
  description: "The currency code of the transaction",
  constraints: [
  max_length: 3
  ]
  ]
  ]
  allow_nil? is true by default

  - `:type` (an `Ash.Type`) - Required.

  - `:allow_nil?` (`t:boolean/0`) - The default value is `true`.

  - `:description` (`t:String.t/0`)

  - `:constraints` (`t:keyword/0`) - The default value is `[]`.

### Ash.Type.Struct.handle_change?/0 (function)

### Ash.Type.Struct.prepare_change?/0 (function)

### Ash.Type.Term (module)

Represents a raw elixir term in the database

A builtin type that can be referenced via `:binary`

### Ash.Type.Term.handle_change?/0 (function)

### Ash.Type.Term.prepare_change?/0 (function)

### Ash.Type.Time (module)

Represents a time in the database, with a 'second' precision

A builtin type that can be referenced via `:time`

### Constraints - Ash.Type.Time (module)

- `:precision` - Valid values are :microsecond, :second The default value is `:second`.

### Ash.Type.Time.handle_change?/0 (function)

### Ash.Type.Time.prepare_change?/0 (function)

### Ash.Type.TimeUsec (module)

Represents a time with `microsecond` precision.

A builtin type that can be referenced via `:time_usec`

### Ash.Type.TimeUsec.handle_change?/0 (function)

### Ash.Type.TimeUsec.prepare_change?/0 (function)

### Ash.Type.Tuple (module)

Represents a tuple stored in the data layer as a map.

A builtin type that can be referenced via `:tuple`

- `:fields` (`t:keyword/0`) - Required. The types of the fields in the tuple, and their constraints.
  This type is stored as a map under the hood, keyed by the field name,
  and is represented in memory as a tuple.
  For example:
  fields: [
  amount: [
  type: :integer,
  description: "The amount of the transaction",
  constraints: [
  max: 10
  ]
  ],
  currency: [
  type: :string,
  allow_nil?: false,
  description: "The currency code of the transaction",
  constraints: [
  max_length: 3
  ]
  ]
  ]
  allow_nil? is true by default

  - `:type` (an `Ash.Type`) - Required.

  - `:allow_nil?` (`t:boolean/0`) - The default value is `true`.

  - `:description` (`t:String.t/0`)

  - `:constraints` (`t:keyword/0`) - The default value is `[]`.

### Ash.Type.Tuple.handle_change?/0 (function)

### Ash.Type.Tuple.prepare_change?/0 (function)

### Ash.Type.UUID (module)

Represents a UUID.

A builtin type that can be referenced via `:uuid`

### Ash.Type.UUID.handle_change?/0 (function)

### Ash.Type.UUID.prepare_change?/0 (function)

### Ash.Type.UUIDv7 (module)

Represents a UUID.

A builtin type that can be referenced via `:uuid_v7`

### Ash.Type.UUIDv7.handle_change?/0 (function)

### Ash.Type.UUIDv7.prepare_change?/0 (function)

### Ash.Type.Union (module)

A union between multiple types, distinguished with a tag or by attempting to validate.

### Constraints - Ash.Type.Union (module)

- `:storage` - How the value will be stored when persisted.
  `:type_and_value` will store the type and value in a map like so `{type: :type_name, value: the_value}`
  `:map_with_tag` will store the value directly. This only works if all types have a `tag` and `tag_value` configured.
  Valid values are :type_and_value, :map_with_tag The default value is `:type_and_value`.

- `:types` - The types to be unioned, a map of an identifier for the enum value to its configuration.
  When using `tag` and `tag_value` we are referring to a map key that must equal a certain value
  in order for the value to be considered an instance of that type.
  For example:
  types: [
  int: [
  type: :integer,
  constraints: [
  max: 10
  ]
  ],
  object: [
  type: MyObjectType,
  # The default value is `true`
  # this passes the tag key/value to the nested type
  # when casting input
  cast_tag?: true,
  tag: :type,
  tag_value: "my_object"
  ],
  other_object: [
  type: MyOtherObjectType,
  cast_tag?: true,
  tag: :type,
  tag_value: "my_other_object"
  ],
  other_object_without_type: [
  type: MyOtherObjectTypeWithoutType,
  cast_tag?: false,
  tag: :type,
  tag_value: nil
  ]
  ]
  IMPORTANT:
  This is stored as a map under the hood. Filters over the data will need to take this into account.
  Additionally, if you are not using a tag, a value will be considered to be of the given type if it successfully casts.
  This means that, for example, if you try to cast `"10"` as a union of a string and an integer, it will end up as `"10"` because
  it is a string. If you put the integer type ahead of the string type, it will cast first and `10` will be the value.

### Ash.Type.Union.handle_change?/0 (function)

### Ash.Type.Union.prepare_change?/0 (function)

### Ash.Type.UrlEncodedBinary (module)

Represents a binary that attempts to decode input strings as a url encoded base64 string.

A builtin type that can be referenced via `:url_encoded_binary`

### Ash.Type.UrlEncodedBinary.handle_change?/0 (function)

### Ash.Type.UrlEncodedBinary.prepare_change?/0 (function)

### Ash.Type.UtcDatetime (module)

Represents a utc datetime, with 'second' precision. A wrapper around `:datetime` for backwards compatibility.

A builtin type that can be referenced via `:utc_datetime`

### Ash.Type.UtcDatetime.handle_change?/0 (function)

### Ash.Type.UtcDatetime.prepare_change?/0 (function)

### Ash.Type.UtcDatetimeUsec (module)

Represents a utc datetime with `microsecond` precision. A wrapper around `:datetime` for backwards compatibility.

A builtin type that can be referenced via `:utc_datetime_usec`

### Ash.Type.UtcDatetimeUsec.handle_change?/0 (function)

### Ash.Type.UtcDatetimeUsec.prepare_change?/0 (function)

### Ash.Type.Vector (module)

Represents a vector.

A builtin type that can be referenced via `:vector`.

### Constraints - Ash.Type.Vector (module)

- `:dimensions` (`t:integer/0`) - The dimensions of the vector

### Ash.Type.Vector.handle_change?/0 (function)

### Ash.Type.Vector.prepare_change?/0 (function)

### Ash.Error (module)

Tools and utilities used by Ash to manage and conform errors

### Ash.Error.ash_error/0 (type)

### Ash.Error.ash_error?/1 (function)

Returns whether or not a term is an Ash.Error type.

### Ash.Error.ash_error_subject/0 (type)

### Ash.Error.class/0 (type)

### Ash.Error.class_module/0 (type)

### Ash.Error.error_class/0 (type)

### Ash.Error.error_descriptions/1 (function)

Converts errors into a single `String.t`.

### Ash.Error.error_input/0 (type)

### Ash.Error.error_keyword/0 (type)

### Ash.Error.error_keyword_option/0 (type)

### Ash.Error.path/0 (type)

### Ash.Error.path_input/0 (type)

### Ash.Error.set_path/2 (function)

This function prepends the provided path to any existing path on the errors.

### Ash.Error.splode_error?/2 (function)

### Ash.Error.t/0 (type)

### Ash.Error.to_ash_error/3 (function)

Converts a value to an Ash exception.

The supported inputs to this function can be provided to various places,
like `Ash.Query.add_error/2`, `Ash.Changeset.add_error/2` and `Ash.ActionInput.add_error/2`.

Additionally, any place that you can _return_ an error you can return instead a valid
error input.

See [the error handling guide](/documentation/development/error-handling.md) for more.

### Ash.Error.to_error_class/2 (function)

Converts a value to an Ash.Error type.

### Ash.Error.unwrap!/2 (function)

Raises an error if the result is an error, otherwise returns the result

Alternatively, you can use the `defsplode` macro, which does this automatically.

### Options - Ash.Error.unwrap!/2 (function)

- `:error_opts` - Options to pass to `to_error/2` when converting the returned error
- `:unknown_error_opts` - Options to pass to the unknown error if the function returns only `:error`.
  not necessary if your function always returns `{:error, error}`.

### Examples - Ash.Error.unwrap!/2 (function)

def function(arg) do
case do_something(arg) do
:success -> :ok
{:success, result} -> {:ok, result}
{:error, error} -> {:error, error}
end
end

def function!(arg) do
YourErrors.unwrap!(function(arg))
end

### Ash.Error.Action.InvalidArgument.exception/1 (function)

Create an `Elixir.Ash.Error.Action.InvalidArgument` without raising it.

### Keys - Ash.Error.Action.InvalidArgument.exception/1 (function)

- :field
- :message
- :value

### Ash.Error.Changes.ActionRequiresActor.exception/1 (function)

Create an `Elixir.Ash.Error.Changes.ActionRequiresActor` without raising it.

### Keys - Ash.Error.Changes.ActionRequiresActor.exception/1 (function)

### Ash.Error.Changes.InvalidArgument.exception/1 (function)

Create an `Elixir.Ash.Error.Changes.InvalidArgument` without raising it.

### Keys - Ash.Error.Changes.InvalidArgument.exception/1 (function)

- :field
- :message
- :value

### Ash.Error.Changes.InvalidAttribute.exception/1 (function)

Create an `Elixir.Ash.Error.Changes.InvalidAttribute` without raising it.

### Keys - Ash.Error.Changes.InvalidAttribute.exception/1 (function)

- :field
- :message
- :private_vars
- :value

### Ash.Error.Changes.InvalidChanges.exception/1 (function)

Create an `Elixir.Ash.Error.Changes.InvalidChanges` without raising it.

### Keys - Ash.Error.Changes.InvalidChanges.exception/1 (function)

- :fields
- :message
- :validation
- :value

### Ash.Error.Changes.InvalidRelationship.exception/1 (function)

Create an `Elixir.Ash.Error.Changes.InvalidRelationship` without raising it.

### Keys - Ash.Error.Changes.InvalidRelationship.exception/1 (function)

- :relationship
- :message

### Ash.Error.Changes.NoSuchAttribute.exception/1 (function)

Create an `Elixir.Ash.Error.Changes.NoSuchAttribute` without raising it.

### Keys - Ash.Error.Changes.NoSuchAttribute.exception/1 (function)

- :resource
- :attribute

### Ash.Error.Changes.NoSuchRelationship.exception/1 (function)

Create an `Elixir.Ash.Error.Changes.NoSuchRelationship` without raising it.

### Keys - Ash.Error.Changes.NoSuchRelationship.exception/1 (function)

- :resource
- :relationship

### Ash.Error.Changes.Required.exception/1 (function)

Create an `Elixir.Ash.Error.Changes.Required` without raising it.

### Keys - Ash.Error.Changes.Required.exception/1 (function)

- :field
- :type
- :resource

### Ash.Error.Changes.StaleRecord.exception/1 (function)

Create an `Elixir.Ash.Error.Changes.StaleRecord` without raising it.

### Keys - Ash.Error.Changes.StaleRecord.exception/1 (function)

- :resource
- :filter
- :field

### Ash.Error.Exception (module)

Tooling for creating an Ash exception

### Ash.Error.Exception.def_ash_error/2 (macro)

### Ash.Error.Forbidden.exception/1 (function)

Create an `Elixir.Ash.Error.Forbidden` without raising it.

### Keys - Ash.Error.Forbidden.exception/1 (function)

- :changeset
- :query
- :action_input
- :errors

### Ash.Error.Forbidden.message/1 (function)

Callback implementation for Exception.message/1 .

### Ash.Error.Forbidden.t/0 (type)

### Ash.Error.Forbidden.CannotFilterCreates.exception/1 (function)

Create an `Elixir.Ash.Error.Forbidden.CannotFilterCreates` without raising it.

### Keys - Ash.Error.Forbidden.CannotFilterCreates.exception/1 (function)

- :filter

### Ash.Error.Forbidden.DomainRequiresActor.exception/1 (function)

Create an `Elixir.Ash.Error.Forbidden.DomainRequiresActor` without raising it.

### Keys - Ash.Error.Forbidden.DomainRequiresActor.exception/1 (function)

- :domain

### Ash.Error.Forbidden.DomainRequiresAuthorization.exception/1 (function)

Create an `Elixir.Ash.Error.Forbidden.DomainRequiresAuthorization` without raising it.

### Keys - Ash.Error.Forbidden.DomainRequiresAuthorization.exception/1 (function)

- :domain

### Ash.Error.Forbidden.ForbiddenField.exception/1 (function)

Create an `Elixir.Ash.Error.Forbidden.ForbiddenField` without raising it.

### Keys - Ash.Error.Forbidden.ForbiddenField.exception/1 (function)

- :resource
- :field

### Ash.Error.Forbidden.InitialDataRequired.exception/1 (function)

Create an `Elixir.Ash.Error.Forbidden.InitialDataRequired` without raising it.

### Keys - Ash.Error.Forbidden.InitialDataRequired.exception/1 (function)

- :source

### Ash.Error.Forbidden.MustPassStrictCheck.exception/1 (function)

Create an `Elixir.Ash.Error.Forbidden.MustPassStrictCheck` without raising it.

### Keys - Ash.Error.Forbidden.MustPassStrictCheck.exception/1 (function)

### Ash.Error.Forbidden.Placeholder.exception/1 (function)

Create an `Elixir.Ash.Error.Forbidden.Placeholder` without raising it.

### Keys - Ash.Error.Forbidden.Placeholder.exception/1 (function)

- :authorizer

### Ash.Error.Forbidden.Policy.exception/1 (function)

Create an `Elixir.Ash.Error.Forbidden.Policy` without raising it.

### Keys - Ash.Error.Forbidden.Policy.exception/1 (function)

- :scenarios
- :facts
- :filter
- :actor
- :policy_breakdown?
- :must_pass_strict_check?
- :for_fields
- :subject
- :context_description
- :policies
- :resource
- :solver_statement
- :domain
- :action
- :changeset_doesnt_match_filter

### Ash.Error.Forbidden.Policy.get_breakdown/4 (function)

Print a report of an authorization failure from authorization information.

Options:

- `:help_text?`: Defaults to true. Displays help text at the top of the policy breakdown.
- `:success?`: Defaults to false. Changes the messaging/graphics around to indicate successful policy authorization.
- `:must_pass_strict_check?`: Defaults to false. Adds a message about this authorization requiring passing strict check.

### Ash.Error.Forbidden.Policy.report/1 (function)

Print a report of an authorization failure from a forbidden error

Options:

- `:help_text?`: Defaults to true. Displays help text at the top of the policy breakdown.

### Ash.Error.Forbidden.Policy.report/2 (function)

### Ash.Error.Framework.exception/1 (function)

Create an `Elixir.Ash.Error.Framework` without raising it.

### Keys - Ash.Error.Framework.exception/1 (function)

- :changeset
- :query
- :action_input
- :errors

### Ash.Error.Framework.message/1 (function)

Callback implementation for Exception.message/1 .

### Ash.Error.Framework.t/0 (type)

### Ash.Error.Framework.AssumptionFailed.exception/1 (function)

Create an `Elixir.Ash.Error.Framework.AssumptionFailed` without raising it.

### Keys - Ash.Error.Framework.AssumptionFailed.exception/1 (function)

- :message

### Ash.Error.Framework.CanNotBeAtomic.exception/1 (function)

Create an `Elixir.Ash.Error.Framework.CanNotBeAtomic` without raising it.

### Keys - Ash.Error.Framework.CanNotBeAtomic.exception/1 (function)

- :resource
- :change
- :reason

### Ash.Error.Framework.FlagAssertionFailed.exception/1 (function)

Create an `Elixir.Ash.Error.Framework.FlagAssertionFailed` without raising it.

### Keys - Ash.Error.Framework.FlagAssertionFailed.exception/1 (function)

- :flag
- :heading

### Ash.Error.Framework.InvalidReturnType.exception/1 (function)

Create an `Elixir.Ash.Error.Framework.InvalidReturnType` without raising it.

### Keys - Ash.Error.Framework.InvalidReturnType.exception/1 (function)

- :message

### Ash.Error.Framework.MustBeAtomic.exception/1 (function)

Create an `Elixir.Ash.Error.Framework.MustBeAtomic` without raising it.

### Keys - Ash.Error.Framework.MustBeAtomic.exception/1 (function)

- :resource
- :action
- :reason

### Ash.Error.Framework.SynchronousEngineStuck.exception/1 (function)

Create an `Elixir.Ash.Error.Framework.SynchronousEngineStuck` without raising it.

### Keys - Ash.Error.Framework.SynchronousEngineStuck.exception/1 (function)

### Ash.Error.Invalid.exception/1 (function)

Create an `Elixir.Ash.Error.Invalid` without raising it.

### Keys - Ash.Error.Invalid.exception/1 (function)

- :changeset
- :query
- :action_input
- :errors

### Ash.Error.Invalid.message/1 (function)

Callback implementation for Exception.message/1 .

### Ash.Error.Invalid.t/0 (type)

### Ash.Error.Invalid.ActionRequiresPagination.exception/1 (function)

Create an `Elixir.Ash.Error.Invalid.ActionRequiresPagination` without raising it.

### Keys - Ash.Error.Invalid.ActionRequiresPagination.exception/1 (function)

- :resource
- :action

### Ash.Error.Invalid.AtomicsNotSupported.exception/1 (function)

Create an `Elixir.Ash.Error.Invalid.AtomicsNotSupported` without raising it.

### Keys - Ash.Error.Invalid.AtomicsNotSupported.exception/1 (function)

- :resource
- :action_type

### Ash.Error.Invalid.InvalidActionType.exception/1 (function)

Create an `Elixir.Ash.Error.Invalid.InvalidActionType` without raising it.

### Keys - Ash.Error.Invalid.InvalidActionType.exception/1 (function)

- :message
- :type
- :expectation

### Ash.Error.Invalid.InvalidCustomInput.exception/1 (function)

Create an `Elixir.Ash.Error.Invalid.InvalidCustomInput` without raising it.

### Keys - Ash.Error.Invalid.InvalidCustomInput.exception/1 (function)

- :field
- :message
- :value

### Ash.Error.Invalid.InvalidPrimaryKey.exception/1 (function)

Create an `Elixir.Ash.Error.Invalid.InvalidPrimaryKey` without raising it.

### Keys - Ash.Error.Invalid.InvalidPrimaryKey.exception/1 (function)

- :resource
- :value

### Ash.Error.Invalid.LimitRequired.exception/1 (function)

Create an `Elixir.Ash.Error.Invalid.LimitRequired` without raising it.

### Keys - Ash.Error.Invalid.LimitRequired.exception/1 (function)

### Ash.Error.Invalid.MultipleResults.exception/1 (function)

Create an `Elixir.Ash.Error.Invalid.MultipleResults` without raising it.

### Keys - Ash.Error.Invalid.MultipleResults.exception/1 (function)

- :count
- :at_least?
- :query

### Ash.Error.Invalid.NoIdentityFound.exception/1 (function)

Create an `Elixir.Ash.Error.Invalid.NoIdentityFound` without raising it.

### Keys - Ash.Error.Invalid.NoIdentityFound.exception/1 (function)

- :resource
- :identity

### Ash.Error.Invalid.NoMatchingBulkStrategy.exception/1 (function)

Create an `Elixir.Ash.Error.Invalid.NoMatchingBulkStrategy` without raising it.

### Keys - Ash.Error.Invalid.NoMatchingBulkStrategy.exception/1 (function)

- :resource
- :action
- :requested_strategies
- :not_stream_reason
- :not_atomic_batches_reason
- :not_atomic_reason
- :footer

### Ash.Error.Invalid.NoPrimaryAction.exception/1 (function)

Create an `Elixir.Ash.Error.Invalid.NoPrimaryAction` without raising it.

### Keys - Ash.Error.Invalid.NoPrimaryAction.exception/1 (function)

- :resource
- :type

### Ash.Error.Invalid.NoSuchAction.exception/1 (function)

Create an `Elixir.Ash.Error.Invalid.NoSuchAction` without raising it.

### Keys - Ash.Error.Invalid.NoSuchAction.exception/1 (function)

- :resource
- :action
- :type

### Ash.Error.Invalid.NoSuchInput.exception/1 (function)

Create an `Elixir.Ash.Error.Invalid.NoSuchInput` without raising it.

### Keys - Ash.Error.Invalid.NoSuchInput.exception/1 (function)

- :calculation
- :resource
- :action
- :input
- :inputs
- :did_you_mean

### Ash.Error.Invalid.NoSuchResource.exception/1 (function)

Create an `Elixir.Ash.Error.Invalid.NoSuchResource` without raising it.

### Keys - Ash.Error.Invalid.NoSuchResource.exception/1 (function)

- :resource
- :message

### Ash.Error.Invalid.NonCountableAction.exception/1 (function)

Create an `Elixir.Ash.Error.Invalid.NonCountableAction` without raising it.

### Keys - Ash.Error.Invalid.NonCountableAction.exception/1 (function)

- :resource
- :action

### Ash.Error.Invalid.NonStreamableAction.exception/1 (function)

Create an `Elixir.Ash.Error.Invalid.NonStreamableAction` without raising it.

### Keys - Ash.Error.Invalid.NonStreamableAction.exception/1 (function)

- :resource
- :action
- :for_bulk_update
- :for_bulk_destroy
- :types

### Ash.Error.Invalid.PaginationRequired.exception/1 (function)

Create an `Elixir.Ash.Error.Invalid.PaginationRequired` without raising it.

### Keys - Ash.Error.Invalid.PaginationRequired.exception/1 (function)

### Ash.Error.Invalid.ResourceNotAllowed.exception/1 (function)

Create an `Elixir.Ash.Error.Invalid.ResourceNotAllowed` without raising it.

### Keys - Ash.Error.Invalid.ResourceNotAllowed.exception/1 (function)

- :resource
- :domain

### Ash.Error.Invalid.TenantRequired.exception/1 (function)

Create an `Elixir.Ash.Error.Invalid.TenantRequired` without raising it.

### Keys - Ash.Error.Invalid.TenantRequired.exception/1 (function)

- :resource

### Ash.Error.Invalid.Timeout.exception/1 (function)

Create an `Elixir.Ash.Error.Invalid.Timeout` without raising it.

### Keys - Ash.Error.Invalid.Timeout.exception/1 (function)

- :name
- :timeout

### Ash.Error.Invalid.TimeoutNotSupported.exception/1 (function)

Create an `Elixir.Ash.Error.Invalid.TimeoutNotSupported` without raising it.

### Keys - Ash.Error.Invalid.TimeoutNotSupported.exception/1 (function)

- :resource

### Ash.Error.Invalid.Unavailable.exception/1 (function)

Create an `Elixir.Ash.Error.Invalid.Unavailable` without raising it.

### Keys - Ash.Error.Invalid.Unavailable.exception/1 (function)

- :resource
- :source
- :reason

### Ash.Error.Load.InvalidQuery.exception/1 (function)

Create an `Elixir.Ash.Error.Load.InvalidQuery` without raising it.

### Keys - Ash.Error.Load.InvalidQuery.exception/1 (function)

- :resource
- :relationship
- :query
- :load_path

### Ash.Error.Load.NoSuchRelationship.exception/1 (function)

Create an `Elixir.Ash.Error.Load.NoSuchRelationship` without raising it.

### Keys - Ash.Error.Load.NoSuchRelationship.exception/1 (function)

- :resource
- :relationship
- :load_path

### Ash.Error.Page.InvalidKeyset.exception/1 (function)

Create an `Elixir.Ash.Error.Page.InvalidKeyset` without raising it.

### Keys - Ash.Error.Page.InvalidKeyset.exception/1 (function)

- :value
- :key

### Ash.Error.Query.AggregatesNotSupported.exception/1 (function)

Create an `Elixir.Ash.Error.Query.AggregatesNotSupported` without raising it.

### Keys - Ash.Error.Query.AggregatesNotSupported.exception/1 (function)

- :resource
- :feature
- :type

### Ash.Error.Query.CalculationRequiresPrimaryKey.exception/1 (function)

Create an `Elixir.Ash.Error.Query.CalculationRequiresPrimaryKey` without raising it.

### Keys - Ash.Error.Query.CalculationRequiresPrimaryKey.exception/1 (function)

- :resource
- :calculation

### Ash.Error.Query.CalculationsNotSupported.exception/1 (function)

Create an `Elixir.Ash.Error.Query.CalculationsNotSupported` without raising it.

### Keys - Ash.Error.Query.CalculationsNotSupported.exception/1 (function)

- :resource
- :feature

### Ash.Error.Query.InvalidArgument.exception/1 (function)

Create an `Elixir.Ash.Error.Query.InvalidArgument` without raising it.

### Keys - Ash.Error.Query.InvalidArgument.exception/1 (function)

- :field
- :message
- :value

### Ash.Error.Query.InvalidCalculationArgument.exception/1 (function)

Create an `Elixir.Ash.Error.Query.InvalidCalculationArgument` without raising it.

### Keys - Ash.Error.Query.InvalidCalculationArgument.exception/1 (function)

- :calculation
- :field
- :message
- :value

### Ash.Error.Query.InvalidExpression.exception/1 (function)

Create an `Elixir.Ash.Error.Query.InvalidExpression` without raising it.

### Keys - Ash.Error.Query.InvalidExpression.exception/1 (function)

- :expression
- :message

### Ash.Error.Query.InvalidFilterReference.exception/1 (function)

Create an `Elixir.Ash.Error.Query.InvalidFilterReference` without raising it.

### Keys - Ash.Error.Query.InvalidFilterReference.exception/1 (function)

- :field
- :simple_equality?

### Ash.Error.Query.InvalidFilterValue.exception/1 (function)

Create an `Elixir.Ash.Error.Query.InvalidFilterValue` without raising it.

### Keys - Ash.Error.Query.InvalidFilterValue.exception/1 (function)

- :message
- :value
- :context

### Ash.Error.Query.InvalidLimit.exception/1 (function)

Create an `Elixir.Ash.Error.Query.InvalidLimit` without raising it.

### Keys - Ash.Error.Query.InvalidLimit.exception/1 (function)

- :limit

### Ash.Error.Query.InvalidLoad.exception/1 (function)

Create an `Elixir.Ash.Error.Query.InvalidLoad` without raising it.

### Keys - Ash.Error.Query.InvalidLoad.exception/1 (function)

- :load

### Ash.Error.Query.InvalidOffset.exception/1 (function)

Create an `Elixir.Ash.Error.Query.InvalidOffset` without raising it.

### Keys - Ash.Error.Query.InvalidOffset.exception/1 (function)

- :offset

### Ash.Error.Query.InvalidPage.exception/1 (function)

Create an `Elixir.Ash.Error.Query.InvalidPage` without raising it.

### Keys - Ash.Error.Query.InvalidPage.exception/1 (function)

- :page

### Ash.Error.Query.InvalidQuery.exception/1 (function)

Create an `Elixir.Ash.Error.Query.InvalidQuery` without raising it.

### Keys - Ash.Error.Query.InvalidQuery.exception/1 (function)

- :field
- :fields
- :message
- :value

### Ash.Error.Query.InvalidSortOrder.exception/1 (function)

Create an `Elixir.Ash.Error.Query.InvalidSortOrder` without raising it.

### Keys - Ash.Error.Query.InvalidSortOrder.exception/1 (function)

- :order

### Ash.Error.Query.LockNotSupported.exception/1 (function)

Create an `Elixir.Ash.Error.Query.LockNotSupported` without raising it.

### Keys - Ash.Error.Query.LockNotSupported.exception/1 (function)

- :resource
- :lock_type

### Ash.Error.Query.NoComplexSortsWithKeysetPagination.exception/1 (function)

Create an `Elixir.Ash.Error.Query.NoComplexSortsWithKeysetPagination` without raising it.

### Keys - Ash.Error.Query.NoComplexSortsWithKeysetPagination.exception/1 (function)

- :resource
- :sort

### Ash.Error.Query.NoReadAction.exception/1 (function)

Create an `Elixir.Ash.Error.Query.NoReadAction` without raising it.

### Keys - Ash.Error.Query.NoReadAction.exception/1 (function)

- :resource
- :when

### Ash.Error.Query.NoSuchAttribute.exception/1 (function)

Create an `Elixir.Ash.Error.Query.NoSuchAttribute` without raising it.

### Keys - Ash.Error.Query.NoSuchAttribute.exception/1 (function)

- :resource
- :attribute

### Ash.Error.Query.NoSuchField.exception/1 (function)

Create an `Elixir.Ash.Error.Query.NoSuchField` without raising it.

### Keys - Ash.Error.Query.NoSuchField.exception/1 (function)

- :resource
- :field

### Ash.Error.Query.NoSuchFilterPredicate.exception/1 (function)

Create an `Elixir.Ash.Error.Query.NoSuchFilterPredicate` without raising it.

### Keys - Ash.Error.Query.NoSuchFilterPredicate.exception/1 (function)

- :message
- :value
- :key
- :resource

### Ash.Error.Query.NoSuchFunction.exception/1 (function)

Create an `Elixir.Ash.Error.Query.NoSuchFunction` without raising it.

### Keys - Ash.Error.Query.NoSuchFunction.exception/1 (function)

- :function
- :arity
- :resource
- :could_be_calculation?

### Ash.Error.Query.NoSuchOperator.exception/1 (function)

Create an `Elixir.Ash.Error.Query.NoSuchOperator` without raising it.

### Keys - Ash.Error.Query.NoSuchOperator.exception/1 (function)

- :operator

### Ash.Error.Query.NoSuchRelationship.exception/1 (function)

Create an `Elixir.Ash.Error.Query.NoSuchRelationship` without raising it.

### Keys - Ash.Error.Query.NoSuchRelationship.exception/1 (function)

- :resource
- :relationship

### Ash.Error.Query.NotFound.exception/1 (function)

Create an `Elixir.Ash.Error.Query.NotFound` without raising it.

### Keys - Ash.Error.Query.NotFound.exception/1 (function)

- :primary_key
- :resource

### Ash.Error.Query.ReadActionRequired.exception/1 (function)

Create an `Elixir.Ash.Error.Query.ReadActionRequired` without raising it.

### Keys - Ash.Error.Query.ReadActionRequired.exception/1 (function)

- :resource

### Ash.Error.Query.ReadActionRequiresActor.exception/1 (function)

Create an `Elixir.Ash.Error.Query.ReadActionRequiresActor` without raising it.

### Keys - Ash.Error.Query.ReadActionRequiresActor.exception/1 (function)

### Ash.Error.Query.Required.exception/1 (function)

Create an `Elixir.Ash.Error.Query.Required` without raising it.

### Keys - Ash.Error.Query.Required.exception/1 (function)

- :field
- :type
- :resource

### Ash.Error.Query.UnsortableField.exception/1 (function)

Create an `Elixir.Ash.Error.Query.UnsortableField` without raising it.

### Keys - Ash.Error.Query.UnsortableField.exception/1 (function)

- :resource
- :field
- :reason

### Ash.Error.Query.UnsupportedPredicate.exception/1 (function)

Create an `Elixir.Ash.Error.Query.UnsupportedPredicate` without raising it.

### Keys - Ash.Error.Query.UnsupportedPredicate.exception/1 (function)

- :resource
- :predicate
- :type

### Ash.Error.SimpleDataLayer.NoDataProvided.exception/1 (function)

Create an `Elixir.Ash.Error.SimpleDataLayer.NoDataProvided` without raising it.

### Keys - Ash.Error.SimpleDataLayer.NoDataProvided.exception/1 (function)

- :resource
- :message

### Ash.Error.Stacktrace (module)

A placeholder for a stacktrace so that we can avoid printing it everywhere

### Ash.Error.Stacktrace.t/0 (type)

### Ash.Error.Unknown.exception/1 (function)

Construction an exception using the arguments passed in. You can see
Elixir's doc on `Exception/1` for more information.

### Ash.Error.Unknown.message/1 (function)

Callback implementation for Exception.message/1 .

### Ash.Error.Unknown.t/0 (type)

### Ash.Error.Unknown.UnknownError.exception/1 (function)

Create an `Elixir.Ash.Error.Unknown.UnknownError` without raising it.

### Keys - Ash.Error.Unknown.UnknownError.exception/1 (function)

- :error
- :field
- :value

### Ash.Error.Unknown.UnknownError.t/0 (type)

### Ash.DataLayer.Verifiers.RequirePreCheckWith (module)

Ensures that all identities have a `pre_check_with` configured, or raises.

### Ash.Notifier.PubSub.Verifiers.VerifyActionNames (module)

Verifies action names in configured publications

### Ash.Notifier.PubSub.Verifiers.VerifyActionNames.verify/1 (function)

Callback implementation for Spark.Dsl.Verifier.verify/1 .

### Ash.Domain.Verifiers.EnsureNoEmbeds (module)

Ensures that all resources for a given domain are not embeds.

### Ash.Domain.Verifiers.ValidateArgumentsToCodeInterface (module)

Validate the arguments defined in the code interface
and reject arguments that are not action attributes/arguments

### Ash.Domain.Verifiers.ValidateRelatedResourceInclusion (module)

Ensures that all related resources are included in a domain.

### Ash.Policy.Authorizer.Transformers.AddMissingFieldPolicies (module)

Adds field policies for any missing fields

### Ash.Policy.Authorizer.Transformers.AddMissingFieldPolicies.after?/1 (function)

Callback implementation for Spark.Dsl.Transformer.after?/1 .

### Ash.Policy.Authorizer.Transformers.AddMissingFieldPolicies.after_compile?/0 (function)

Callback implementation for Spark.Dsl.Transformer.after_compile?/0 .

### Ash.Policy.Authorizer.Transformers.AddMissingFieldPolicies.before?/1 (function)

Callback implementation for Spark.Dsl.Transformer.before?/1 .

### Ash.Policy.Authorizer.Transformers.AddMissingFieldPolicies.transform/1 (function)

Callback implementation for Spark.Dsl.Transformer.transform/1 .

### Ash.Policy.Authorizer.Transformers.CacheFieldPolicies (module)

Cache field policies for each field

### Ash.Policy.Authorizer.Transformers.CacheFieldPolicies.after?/1 (function)

Callback implementation for Spark.Dsl.Transformer.after?/1 .

### Ash.Policy.Authorizer.Transformers.CacheFieldPolicies.after_compile?/0 (function)

Callback implementation for Spark.Dsl.Transformer.after_compile?/0 .

### Ash.Policy.Authorizer.Transformers.CacheFieldPolicies.before?/1 (function)

Callback implementation for Spark.Dsl.Transformer.before?/1 .

### Ash.Policy.Authorizer.Transformers.CacheFieldPolicies.transform/1 (function)

Callback implementation for Spark.Dsl.Transformer.transform/1 .

### Ash.Resource.Transformers.AttributesByName (module)

Persists attribute_names and attributes_by_name.

### Ash.Resource.Transformers.AttributesByName.after?/1 (function)

Callback implementation for Spark.Dsl.Transformer.after?/1 .

### Ash.Resource.Transformers.AttributesByName.after_compile?/0 (function)

Callback implementation for Spark.Dsl.Transformer.after_compile?/0 .

### Ash.Resource.Transformers.AttributesByName.before?/1 (function)

Callback implementation for Spark.Dsl.Transformer.before?/1 .

### Ash.Resource.Transformers.AttributesByName.transform/1 (function)

Callback implementation for Spark.Dsl.Transformer.transform/1 .

### Ash.Resource.Transformers.BelongsToAttribute (module)

Creates the attribute for belongs_to relationships that have `define_attribute?: true`

### Ash.Resource.Transformers.BelongsToAttribute.after?/1 (function)

Callback implementation for Spark.Dsl.Transformer.after?/1 .

### Ash.Resource.Transformers.BelongsToAttribute.after_compile?/0 (function)

Callback implementation for Spark.Dsl.Transformer.after_compile?/0 .

### Ash.Resource.Transformers.BelongsToAttribute.before?/1 (function)

Callback implementation for Spark.Dsl.Transformer.before?/1 .

### Ash.Resource.Transformers.BelongsToAttribute.transform/1 (function)

Callback implementation for Spark.Dsl.Transformer.transform/1 .

### Ash.Resource.Transformers.CacheActionInputs (module)

Stores the set of valid input keys for each action

### Ash.Resource.Transformers.CacheActionInputs.after?/1 (function)

Callback implementation for Spark.Dsl.Transformer.after?/1 .

### Ash.Resource.Transformers.CacheActionInputs.after_compile?/0 (function)

Callback implementation for Spark.Dsl.Transformer.after_compile?/0 .

### Ash.Resource.Transformers.CacheActionInputs.before?/1 (function)

Callback implementation for Spark.Dsl.Transformer.before?/1 .

### Ash.Resource.Transformers.CacheActionInputs.transform/1 (function)

Callback implementation for Spark.Dsl.Transformer.transform/1 .

### Ash.Resource.Transformers.CacheCalculations (module)

Persists commonly used calculation information.

### Ash.Resource.Transformers.CacheCalculations.after?/1 (function)

Callback implementation for Spark.Dsl.Transformer.after?/1 .

### Ash.Resource.Transformers.CacheCalculations.after_compile?/0 (function)

Callback implementation for Spark.Dsl.Transformer.after_compile?/0 .

### Ash.Resource.Transformers.CacheCalculations.before?/1 (function)

Callback implementation for Spark.Dsl.Transformer.before?/1 .

### Ash.Resource.Transformers.CacheCalculations.transform/1 (function)

Callback implementation for Spark.Dsl.Transformer.transform/1 .

### Ash.Resource.Transformers.CachePrimaryKey (module)

Validates and caches the primary key of a resource

### Ash.Resource.Transformers.CachePrimaryKey.after?/1 (function)

Callback implementation for Spark.Dsl.Transformer.after?/1 .

### Ash.Resource.Transformers.CachePrimaryKey.after_compile?/0 (function)

Callback implementation for Spark.Dsl.Transformer.after_compile?/0 .

### Ash.Resource.Transformers.CachePrimaryKey.before?/1 (function)

Callback implementation for Spark.Dsl.Transformer.before?/1 .

### Ash.Resource.Transformers.CachePrimaryKey.transform/1 (function)

Callback implementation for Spark.Dsl.Transformer.transform/1 .

### Ash.Resource.Transformers.CacheRelationships (module)

Persists commonly used relationship information.

### Ash.Resource.Transformers.CacheRelationships.after?/1 (function)

Callback implementation for Spark.Dsl.Transformer.after?/1 .

### Ash.Resource.Transformers.CacheRelationships.after_compile?/0 (function)

Callback implementation for Spark.Dsl.Transformer.after_compile?/0 .

### Ash.Resource.Transformers.CacheRelationships.before?/1 (function)

Callback implementation for Spark.Dsl.Transformer.before?/1 .

### Ash.Resource.Transformers.CacheRelationships.transform/1 (function)

Callback implementation for Spark.Dsl.Transformer.transform/1 .

### Ash.Resource.Transformers.CacheUniqueKeys (module)

Stores the set of unique keys for a resource

### Ash.Resource.Transformers.CacheUniqueKeys.after?/1 (function)

Callback implementation for Spark.Dsl.Transformer.after?/1 .

### Ash.Resource.Transformers.CacheUniqueKeys.after_compile?/0 (function)

Callback implementation for Spark.Dsl.Transformer.after_compile?/0 .

### Ash.Resource.Transformers.CacheUniqueKeys.before?/1 (function)

Callback implementation for Spark.Dsl.Transformer.before?/1 .

### Ash.Resource.Transformers.CacheUniqueKeys.transform/1 (function)

Callback implementation for Spark.Dsl.Transformer.transform/1 .

### Ash.Resource.Transformers.CreateJoinRelationship (module)

Creates an automatically named `has_many` relationship for each many_to_many.

### Ash.Resource.Transformers.CreateJoinRelationship.after?/1 (function)

Callback implementation for Spark.Dsl.Transformer.after?/1 .

### Ash.Resource.Transformers.CreateJoinRelationship.after_compile?/0 (function)

Callback implementation for Spark.Dsl.Transformer.after_compile?/0 .

### Ash.Resource.Transformers.CreateJoinRelationship.before?/1 (function)

Callback implementation for Spark.Dsl.Transformer.before?/1 .

### Ash.Resource.Transformers.CreateJoinRelationship.transform/1 (function)

Callback implementation for Spark.Dsl.Transformer.transform/1 .

### Ash.Resource.Transformers.DefaultAccept (module)

Sets the default `accept` for each action

### Ash.Resource.Transformers.DefaultAccept.after?/1 (function)

Callback implementation for Spark.Dsl.Transformer.after?/1 .

### Ash.Resource.Transformers.DefaultAccept.after_compile?/0 (function)

Callback implementation for Spark.Dsl.Transformer.after_compile?/0 .

### Ash.Resource.Transformers.DefaultAccept.before?/1 (function)

Callback implementation for Spark.Dsl.Transformer.before?/1 .

### Ash.Resource.Transformers.DefaultAccept.transform/1 (function)

Callback implementation for Spark.Dsl.Transformer.transform/1 .

### Ash.Resource.Transformers.GetByReadActions (module)

Transform any read actions which contain a `get_by` option.

### Ash.Resource.Transformers.GetByReadActions.after_compile?/0 (function)

Callback implementation for Spark.Dsl.Transformer.after_compile?/0 .

### Ash.Resource.Transformers.HasDestinationField (module)

Guesses the `destination_attribute` for has many and has one relationships unless provided

### Ash.Resource.Transformers.HasDestinationField.after?/1 (function)

Callback implementation for Spark.Dsl.Transformer.after?/1 .

### Ash.Resource.Transformers.HasDestinationField.after_compile?/0 (function)

Callback implementation for Spark.Dsl.Transformer.after_compile?/0 .

### Ash.Resource.Transformers.HasDestinationField.before?/1 (function)

Callback implementation for Spark.Dsl.Transformer.before?/1 .

### Ash.Resource.Transformers.HasDestinationField.transform/1 (function)

Callback implementation for Spark.Dsl.Transformer.transform/1 .

### Ash.Resource.Transformers.ManyToManyDestinationAttributeOnJoinResource (module)

Guesses the `destination_attribute_on_join_resource` for many to many relationships unless provided.

### Ash.Resource.Transformers.ManyToManyDestinationAttributeOnJoinResource.after?/1 (function)

Callback implementation for Spark.Dsl.Transformer.after?/1 .

### Ash.Resource.Transformers.ManyToManyDestinationAttributeOnJoinResource.after_compile?/0 (function)

Callback implementation for Spark.Dsl.Transformer.after_compile?/0 .

### Ash.Resource.Transformers.ManyToManyDestinationAttributeOnJoinResource.before?/1 (function)

Callback implementation for Spark.Dsl.Transformer.before?/1 .

### Ash.Resource.Transformers.ManyToManyDestinationAttributeOnJoinResource.transform/1 (function)

Callback implementation for Spark.Dsl.Transformer.transform/1 .

### Ash.Resource.Transformers.ManyToManySourceAttributeOnJoinResource (module)

Guesses the `source_attribute_on_join_resource` for many to many relationships unless provided.

### Ash.Resource.Transformers.ManyToManySourceAttributeOnJoinResource.after?/1 (function)

Callback implementation for Spark.Dsl.Transformer.after?/1 .

### Ash.Resource.Transformers.ManyToManySourceAttributeOnJoinResource.after_compile?/0 (function)

Callback implementation for Spark.Dsl.Transformer.after_compile?/0 .

### Ash.Resource.Transformers.ManyToManySourceAttributeOnJoinResource.before?/1 (function)

Callback implementation for Spark.Dsl.Transformer.before?/1 .

### Ash.Resource.Transformers.ManyToManySourceAttributeOnJoinResource.transform/1 (function)

Callback implementation for Spark.Dsl.Transformer.transform/1 .

### Ash.Resource.Transformers.RequireUniqueActionNames (module)

Ensures that all actions have unique names.

### Ash.Resource.Transformers.RequireUniqueActionNames.after?/1 (function)

Callback implementation for Spark.Dsl.Transformer.after?/1 .

### Ash.Resource.Transformers.RequireUniqueActionNames.after_compile?/0 (function)

Callback implementation for Spark.Dsl.Transformer.after_compile?/0 .

### Ash.Resource.Transformers.RequireUniqueActionNames.before?/1 (function)

Callback implementation for Spark.Dsl.Transformer.before?/1 .

### Ash.Resource.Transformers.RequireUniqueActionNames.transform/1 (function)

Callback implementation for Spark.Dsl.Transformer.transform/1 .

### Ash.Resource.Transformers.RequireUniqueFieldNames (module)

Confirms that a resource does not have multiple fields(attributes, calculations, aggregates, and relationships) with the same name.

### Ash.Resource.Transformers.RequireUniqueFieldNames.after?/1 (function)

Callback implementation for Spark.Dsl.Transformer.after?/1 .

### Ash.Resource.Transformers.RequireUniqueFieldNames.after_compile?/0 (function)

Callback implementation for Spark.Dsl.Transformer.after_compile?/0 .

### Ash.Resource.Transformers.RequireUniqueFieldNames.before?/1 (function)

Callback implementation for Spark.Dsl.Transformer.before?/1 .

### Ash.Resource.Transformers.RequireUniqueFieldNames.transform/1 (function)

Callback implementation for Spark.Dsl.Transformer.transform/1 .

### Ash.Resource.Transformers.SetPrimaryActions (module)

Validates the primary action configuration

If multiple primary actions exist this results in an error.

### Ash.Resource.Transformers.SetPrimaryActions.after?/1 (function)

Callback implementation for Spark.Dsl.Transformer.after?/1 .

### Ash.Resource.Transformers.SetPrimaryActions.after_compile?/0 (function)

Callback implementation for Spark.Dsl.Transformer.after_compile?/0 .

### Ash.Resource.Transformers.SetPrimaryActions.before?/1 (function)

Callback implementation for Spark.Dsl.Transformer.before?/1 .

### Ash.Resource.Transformers.SetPrimaryActions.transform/1 (function)

Callback implementation for Spark.Dsl.Transformer.transform/1 .

### Ash.Resource.Transformers.SetRelationshipSource (module)

Sets the `source` key on relationships to be the resource they were defined on

### Ash.Resource.Transformers.SetRelationshipSource.after?/1 (function)

Callback implementation for Spark.Dsl.Transformer.after?/1 .

### Ash.Resource.Transformers.SetRelationshipSource.after_compile?/0 (function)

Callback implementation for Spark.Dsl.Transformer.after_compile?/0 .

### Ash.Resource.Transformers.SetRelationshipSource.before?/1 (function)

Callback implementation for Spark.Dsl.Transformer.before?/1 .

### Ash.Resource.Transformers.SetRelationshipSource.transform/1 (function)

Callback implementation for Spark.Dsl.Transformer.transform/1 .

### Ash.Resource.Transformers.ValidationsAndChangesForType (module)

Persists global changes/validations and what type they go on.

### Ash.Resource.Transformers.ValidationsAndChangesForType.after?/1 (function)

Callback implementation for Spark.Dsl.Transformer.after?/1 .

### Ash.Resource.Transformers.ValidationsAndChangesForType.after_compile?/0 (function)

Callback implementation for Spark.Dsl.Transformer.after_compile?/0 .

### Ash.Resource.Transformers.ValidationsAndChangesForType.before?/1 (function)

Callback implementation for Spark.Dsl.Transformer.before?/1 .

### Ash.Resource.Transformers.ValidationsAndChangesForType.transform/1 (function)

Callback implementation for Spark.Dsl.Transformer.transform/1 .

### Ash.Resource.Verifiers.EnsureAggregateFieldIsAttributeOrCalculation (module)

Ensures that the field at the end of the path is an attribute or calculation.

### Ash.Resource.Verifiers.EnsureAggregateFieldIsAttributeOrCalculation.verify/1 (function)

Callback implementation for Spark.Dsl.Verifier.verify/1 .

### Ash.Resource.Verifiers.NoReservedFieldNames (module)

Confirms that a resource does not use reserved names for field names.

Reserved field names are: [:__struct__, :__meta__, :__metadata__, :__order__, :__lateral_join_source__, :*, :calculations, :aggregates, :relationships, :as].

### Ash.Resource.Verifiers.NoReservedFieldNames.verify/1 (function)

Callback implementation for Spark.Dsl.Verifier.verify/1 .

### Ash.Resource.Verifiers.ValidateAccept (module)

Validates that accept and reject lists only contain valid attributes

### Ash.Resource.Verifiers.ValidateActionTypesSupported (module)

Confirms that all action types declared on a resource are supported by its data layer

### Ash.Resource.Verifiers.ValidateAggregatesSupported (module)

Confirms that all aggregates are supported by the data layer

### Ash.Resource.Verifiers.ValidateArgumentsToCodeInterface (module)

Validate the arguments defined in the code interface
and reject arguments that are not action attributes/arguments

### Ash.Resource.Verifiers.ValidateArgumentsToCodeInterface.verify_interface!/4 (function)

### Ash.Resource.Verifiers.ValidateEagerIdentities (module)

Confirms that eager identities are not declared on a resource with no primary read.

### Ash.Resource.Verifiers.ValidateManagedRelationshipOpts (module)

Confirms that all action types declared on a resource are supported by its data layer

### Ash.Resource.Verifiers.ValidateMultitenancy (module)

Ensures that the multitenancy configuration is valid for the given resource

### Ash.Resource.Verifiers.ValidatePrimaryKey (module)

Validates and caches the primary key of a resource

### Ash.Resource.Verifiers.ValidateRelationshipAttributes (module)

Validates that all relationships point to valid fields

### Ash.Resource.Verifiers.ValidateRelationshipAttributesMatch (module)

Shows a warning on potentially incompatible relationship attributes.

### Ash.Resource.Verifiers.ValidateRelationshipAttributesMatch.verify/1 (function)

Callback implementation for Spark.Dsl.Verifier.verify/1 .

### Ash.Resource.Verifiers.VerifyActionsAtomic (module)

Raises an error on update or destroy actions with `require_atomic?` set to
true when it is known at compile time that they will not be atomic.

### Ash.Resource.Verifiers.VerifyActionsAtomic.verify/1 (function)

Callback implementation for Spark.Dsl.Verifier.verify/1 .

### Ash.Resource.Verifiers.VerifyGenericActionReactorInputs (module)

Returns an error if a generic action calls a Reactor module without specifying
an argument for all expected inputs.

### Ash.Resource.Verifiers.VerifyGenericActionReactorInputs.verify/1 (function)

Callback implementation for Spark.Dsl.Verifier.verify/1 .

### Ash.Resource.Verifiers.VerifyIdentityFields (module)

Raises an error on potentially incompatible identity attributes.

### Ash.Resource.Verifiers.VerifyIdentityFields.verify/1 (function)

Callback implementation for Spark.Dsl.Verifier.verify/1 .

### Ash.Resource.Verifiers.VerifyPrimaryKeyPresent (module)

Raises an error when a required primary key is missing

### Ash.Resource.Verifiers.VerifyPrimaryKeyPresent.verify/1 (function)

Callback implementation for Spark.Dsl.Verifier.verify/1 .

### Ash.Resource.Verifiers.VerifyPrimaryReadActionHasNoArguments (module)

Verifies that primary read actions do not have any arguments

### Ash.Resource.Verifiers.VerifyPrimaryReadActionHasNoArguments.verify/1 (function)

Callback implementation for Spark.Dsl.Verifier.verify/1 .

### Ash.Resource.Verifiers.VerifyReservedCalculationArguments (module)

Verifies that standard context keys are not used as calculation arguments

### Ash.Resource.Verifiers.VerifyReservedCalculationArguments.verify/1 (function)

Callback implementation for Spark.Dsl.Verifier.verify/1 .

### Ash.Resource.Verifiers.VerifySelectedByDefault (module)

Raises an error when a required primary key is missing

### Ash.Resource.Verifiers.VerifySelectedByDefault.verify/1 (function)

Callback implementation for Spark.Dsl.Verifier.verify/1 .

### Ash.Filter.Predicate (behaviour)

Represents a predicate which can be simplified and/or compared with other predicates

Simplification and comparison will need more documentation, but ultimately it
is the logic that allows us to have a flexible and powerful authorization
system.

### Ash.Filter.Predicate.bulk_compare/1 (callback)

As long as at least one predicate of the type defined in your module,
(and this callback is implemented), it will be called with all of the
other predicates present in a filter. The return value is relatively
complex, but it should be a list of boolean statements. E.g.
`{op, left, right}` and `{:not, predicate}` (nested as deep as necessary).

The best way to do it is to find lists of predicates that are mutually
exclusive or mutually inclusive, and pass those lists into
`Ash.SatSolver.mutually_exclusive/1` and `Ash.SatSolver.mutually_inclusive/1`

### Ash.Filter.Predicate.compare/2 (function)

Checks with each predicate module to see if it has a comparison
with

### Ash.Filter.Predicate.compare/2 (callback)

Compare two predicates. If possible, use `c:bulk_compare/1` instead

### Ash.Filter.Predicate.comparison/0 (type)

### Ash.Filter.Predicate.predicate/0 (type)

### Ash.Filter.Predicate.simplify/1 (callback)

Simplify to a more primitive statement.

For example, `x in [1, 2]` simplifies to `x == 1 or x == 2`.
Simplifying to filter expressions that already have comparisons
lets you avoid writing that logic for a given predicate.

### Ash.Query.BooleanExpression (module)

Represents a boolean expression

### Ash.Query.BooleanExpression.new/3 (function)

### Ash.Query.BooleanExpression.optimized_new/3 (function)

### Ash.Query.Call (module)

Represents a function call/AST node in an Ash query expression

### Ash.Query.Exists (module)

Determines if a given related entity exists.

### Ash.Query.Exists.can_return_nil?/1 (function)

### Ash.Query.Exists.new/3 (function)

### Ash.Query.Function (behaviour)

A function is a predicate with an arguments list.

For more information on being a predicate, see `Ash.Filter.Predicate`. Most of the complexities
are there. A function must meet both behaviours.

### Ash.Query.Function.arg/0 (type)

### Ash.Query.Function.args/0 (callback)

The number and types of arguments supported.

### Ash.Query.Function.can_return_nil?/1 (callback)

Whether or not the function return nil.

### Ash.Query.Function.eager_evaluate?/0 (callback)

Whether or not the function can be evaluated eagerly. For example, `now()` cannot be.

### Ash.Query.Function.evaluate/1 (function)

Evaluate the operator with provided inputs

### Ash.Query.Function.evaluate/1 (callback)

Evaluate a function when all arguments are known valid values

### Ash.Query.Function.evaluate_nil_inputs?/0 (callback)

If `true`, will be allowed to evaluate `nil` inputs.

If `false` (the default), any `nil` inputs will cause a `nil` return.

### Ash.Query.Function.name/0 (callback)

The name of the function

### Ash.Query.Function.new/1 (callback)

Instantiate a new function with the provided arguments

### Ash.Query.Function.new/2 (function)

### Ash.Query.Function.ordinal/1 (function)

Attaches the appropriate suffix to refer to an ordinal number, e.g 1 -> "1st"

### Ash.Query.Function.partial_evaluate/1 (callback)

Evaluate a function when some or no arguments are known valid values

### Ash.Query.Function.predicate?/0 (callback)

Whether or not the function is a predicate (takes a reference as the first argument, a value as the second, and returns a boolean)

### Ash.Query.Function.private?/0 (callback)

Whether or not the function should be usable when parsing input.

### Ash.Query.Function.returns/0 (callback)

The return type for each corresponding set of args.

### Ash.Query.Function.try_cast_arguments/2 (function)

### Ash.Query.Not (module)

Represents the negation of the contained expression

### Ash.Query.Not.new/1 (function)

### Ash.Query.Operator (behaviour)

An operator is a predicate with a `left` and a `right`

For more information on being a predicate, see `Ash.Filter.Predicate`. Most of the complexities
are there. An operator must meet both behaviours.

### Ash.Query.Operator.can_return_nil?/1 (callback)

Whether or not the operator can evaluate to nil.

### Ash.Query.Operator.evaluate/1 (function)

Evaluate the operator with provided inputs

### Ash.Query.Operator.evaluate/1 (callback)

Evaluates the operator in Elixir

### Ash.Query.Operator.evaluate_nil_inputs?/0 (callback)

If `true`, will be allowed to evaluate `nil` inputs.

If `false` (the default), any `nil` inputs will cause a `nil` return.

### Ash.Query.Operator.new/2 (callback)

Create a new predicate. There are various return types possible:

- `{:ok, left, right}` - Return the left/right values of the operator
- `{:ok, operator}` - Return the operator itself, this or the one above are acceptable
- `{:known, boolean}` - If the value is already known, e.g `1 == 1`
- `{:error, error}` - If there was an error creating the operator

### Ash.Query.Operator.new/3 (function)

Create a new operator. Pass the module and the left and right values

### Ash.Query.Operator.operator_overloads/1 (function)

Get type overloads for the given operator

### Ash.Query.Operator.operator_symbols/0 (function)

### Ash.Query.Operator.operators/0 (function)

### Ash.Query.Operator.predicate?/0 (callback)

### Ash.Query.Operator.returns/0 (callback)

The types that the expression can return. Should be one entry in the list for each entry in `types`.

### Ash.Query.Operator.to_string/2 (callback)

The implementation of the inspect protocol.

If not defined, it will be inferred

### Ash.Query.Operator.types/0 (callback)

The types accepted by the operator. Defaults to `[:same, :any]`, which is any values of the same type.

### Ash.Query.Parent (module)

Used to access values from the "source" of a given expression.

This is used in cases where expressions are given for some relationship path, for example:any()

```elixir
 has_many :foo, Foo do
   filter expr(priority == :foo and type == parent(foo_type))
 end
```

This is supported on a case by case basis by a given data layer and in specific usages.

### Ash.Query.Parent.new/1 (function)

### Ash.Query.Ref (module)

Represents a relation/attribute reference

### Ash.Query.Ref.name/1 (function)

Returns the referenced field

### Ash.Query.Function.Ago (module)

Subtracts the given interval from the current time in UTC.

For example:
deleted_at > ago(7, :day)

Documentation + available intervals inspired by the corresponding ecto interval implementation

### Ash.Query.Function.Ago.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.At (module)

Gets an element in the list by index

### Ash.Query.Function.At.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.CompositeType (module)

Constructs a composite type in a way that is natively understood by the data layer

To do this, provide a tuple matching the format expected by the type in question.
Check that type's documentation for this information.

### Ash.Query.Function.CompositeType.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.Contains (module)

Returns true if the first string contains the second.

Case insensitive strings are accounted for on either side.

contains("foo", "fo")
true

contains(%Ash.CiString{:string "foo"}, "FoO")
true

contains("foo", %Ash.CiString{:string "FOO"})
true

### Ash.Query.Function.Contains.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.CountNils (module)

Returns the count of nil.

    count_nil([nil, 1, nil]) # 2

### Ash.Query.Function.CountNils.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.DateAdd (module)

Adds the given interval to the current time in UTC

For example:
activates_at < date_add(today(), 7, :day)

Documentation + available intervals inspired by the corresponding ecto interval implementation

### Ash.Query.Function.DateAdd.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.DateTimeAdd (module)

Adds the given interval to the current time in UTC

For example:
activates_at < datetime_add(now(), 7, :day)

Documentation + available intervals inspired by the corresponding ecto interval implementation

### Ash.Query.Function.DateTimeAdd.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.Error (module)

If the predicate is truthy, the provided exception is raised with the provided values.

This exception is not "raised" in the Elixir sense, but the entire expression fails to
evaluate with the given error. Various data layers will handle this differently.

### Ash.Query.Function.Error.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.Fragment (module)

Adds the given interval from the current time in UTC.

For example:
expires_at < from_now(7, :day)

Documentation + available intervals inspired by the corresponding ecto interval implementation

### Ash.Query.Function.Fragment.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.Fragment.casted_new/1 (function)

### Ash.Query.Function.FromNow (module)

Adds the given interval from the current time in UTC.

For example:
expires_at < from_now(7, :day)

Documentation + available intervals inspired by the corresponding ecto interval implementation

### Ash.Query.Function.FromNow.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.GetPath (module)

Gets the value at the provided path in the value, which must be a map or embed.

If you are using a datalayer that provides a `type` function (like AshPostgres), it is a good idea to
wrap your call in that function, e.g `type(author[:bio][:title], :string)`, since data layers that depend
on knowing types may not be able to infer the type from the path. Ash may eventually be able to figure out
the type, in the case that the path consists of only embedded attributes.

If an atom key is provided, access is _indiscriminate_ of atoms vs strings. The atom key is checked first.
If a string key is provided, that is the only thing that is checked. If the value will or may be a struct, be sure to use atoms.

The data layer may handle this differently, for example, AshPostgres only checks
strings at the data layer (because thats all it can be in the database anyway).

Available in query expressions using bracket syntax, e.g `foo[:bar][:baz]`.

### Ash.Query.Function.GetPath.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.If (module)

If predicate is truthy, then the second argument is returned, otherwise the third.

### Ash.Query.Function.If.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.If.partial_evaluate/1 (function)

Callback implementation for Ash.Query.Function.partial_evaluate/1 .

### Ash.Query.Function.IsNil (module)

true if the provided field is nil

### Ash.Query.Function.IsNil.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.Lazy (module)

Runs the provided MFA and returns the result as a known value.

Evaluated just before running the query.

### Ash.Query.Function.Lazy.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.Length (module)

Returns the length of a list attribute defined by the composite type `{:array, Type}`.

    length(roles)

If the attribute allows nils:

    length(roles || [])

### Ash.Query.Function.Length.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.Minus (module)

Multiplies the value by negative one

### Ash.Query.Function.Minus.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.Now (module)

Returns the current datetime

### Ash.Query.Function.Now.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.Rem (module)

Rounds a float, decimal or integer to the given number of points

### Ash.Query.Function.Rem.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.Round (module)

Rounds a float, decimal or integer to the given number of points

### Ash.Query.Function.Round.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.StartOfDay (module)

Converts a date or datetime into the start of day

Accepts an optional time zone, in the same format that can be passed to
`DateTime.new/3`.

For example:
start_of_day(now()) < a_datetime()
start_of_day(now(), "Europe/Copenhagen") < a_datetime()

### Ash.Query.Function.StartOfDay.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.StringDowncase (module)

Downcase a string

### Ash.Query.Function.StringDowncase.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.StringJoin (module)

Joins a list of values.

Ignores `nil` values and concatenates the remaining non-nil values. An optional
joiner can be provided.

    string_join([first_name, last_name], " ")

    string_join([item_a, item_b])

### Ash.Query.Function.StringJoin.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.StringLength (module)

Trims whitespace from a string

### Ash.Query.Function.StringLength.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.StringPosition (module)

Returns the zero-based position of a substring within a string, nil if the string does not contain the substring.

Case insensitive strings are accounted for on either side.

string_position("foo", "fo")
0

string_position(%Ash.CiString{string: "foo"}, "FoO")
0

string_position("foo", %Ash.CiString{string: "FOO"})
0

### Ash.Query.Function.StringPosition.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.StringSplit (module)

Split a string into a list of strings

Splits a string on the given delimiter. The delimiter defaults to a single space. Also supports options.

Keep in mind, this function does _not_ support regexes the way that `String.split/3` does, only raw strings.

    string_split(employee_code)
    string_split(full_name, "foo")
    string_split(full_name, "foo", trim?: true)

### Options - Ash.Query.Function.StringSplit (module)

- `:trim?` (`t:boolean/0`) - Whether or not to trim empty strings from the beginning or end of the result. Equivalent to the `trim` option to `String.split/3` The default value is `false`.

### Ash.Query.Function.StringSplit.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.StringTrim (module)

Trims whitespace from a string

### Ash.Query.Function.StringTrim.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.Today (module)

Returns the current date.

### Ash.Query.Function.Today.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Function.Type (module)

Casts the value to a given type. Can also be used to provide type hints to data layers, where appropriate.

### Ash.Query.Function.Type.args/0 (function)

Callback implementation for Ash.Query.Function.args/0 .

### Ash.Query.Operator.Eq (module)

left == right

The simplest operator, matches if the left and right are equal.

For comparison, this compares as mutually exclusive with other equality
and `is_nil` checks that have the same reference on the left side

### Ash.Query.Operator.Eq.evaluate/1 (function)

Callback implementation for Ash.Query.Operator.evaluate/1 .

### Ash.Query.Operator.Eq.name/0 (function)

### Ash.Query.Operator.Eq.operator/0 (function)

### Ash.Query.Operator.GreaterThan (module)

left > right

In comparison, simplifies to `not(left < right + 1)`, so it will never need to be compared against.

### Ash.Query.Operator.GreaterThan.evaluate/1 (function)

Callback implementation for Ash.Query.Operator.evaluate/1 .

### Ash.Query.Operator.GreaterThan.name/0 (function)

### Ash.Query.Operator.GreaterThan.operator/0 (function)

### Ash.Query.Operator.GreaterThanOrEqual (module)

left >= right

In comparison, simplifies to `not(left < right)`, so it will never need to be compared against.

### Ash.Query.Operator.GreaterThanOrEqual.evaluate/1 (function)

Callback implementation for Ash.Query.Operator.evaluate/1 .

### Ash.Query.Operator.GreaterThanOrEqual.name/0 (function)

### Ash.Query.Operator.GreaterThanOrEqual.operator/0 (function)

### Ash.Query.Operator.In (module)

left in [1, 2, 3]

this predicate matches if the left is in the list on the right

For comparison, this simplifies to a set of "or equals", e.g
`{:or, {:or, {:or, left == 1}, left == 2}, left == 3}`

### Ash.Query.Operator.In.evaluate/1 (function)

Callback implementation for Ash.Query.Operator.evaluate/1 .

### Ash.Query.Operator.In.name/0 (function)

### Ash.Query.Operator.In.operator/0 (function)

### Ash.Query.Operator.IsNil (module)

left is_nil true/false

This predicate matches if the left is nil when the right is `true` or if the
left is not nil when the right is `false`

### Ash.Query.Operator.IsNil.name/0 (function)

### Ash.Query.Operator.IsNil.operator/0 (function)

### Ash.Query.Operator.LessThan (module)

left < right

Does not simplify, but is used as the simplification value for
`Ash.Query.Operator.LessThanOrEqual`, `Ash.Query.Operator.GreaterThan` and
`Ash.Query.Operator.GreaterThanOrEqual`.

When comparing predicates, it is mutually exclusive with `Ash.Query.Operator.IsNil`.
Additionally, it compares as mutually inclusive with any `Ash.Query.Operator.Eq` and
any `Ash.Query.Operator.LessThan` who's right sides are less than it, and mutually
exclusive with any `Ash.Query.Operator.Eq` or `Ash.Query.Operator.GreaterThan` who's
right side's are greater than or equal to it.

### Ash.Query.Operator.LessThan.evaluate/1 (function)

Callback implementation for Ash.Query.Operator.evaluate/1 .

### Ash.Query.Operator.LessThan.name/0 (function)

### Ash.Query.Operator.LessThan.operator/0 (function)

### Ash.Query.Operator.LessThanOrEqual (module)

left <= right

In comparison, simplifies to `left < right + 1`, so it will never need to be compared against.

### Ash.Query.Operator.LessThanOrEqual.evaluate/1 (function)

Callback implementation for Ash.Query.Operator.evaluate/1 .

### Ash.Query.Operator.LessThanOrEqual.name/0 (function)

### Ash.Query.Operator.LessThanOrEqual.operator/0 (function)

### Ash.Query.Operator.NotEq (module)

left != right

In comparison, simplifies to `not(left == right)`

### Ash.Query.Operator.NotEq.evaluate/1 (function)

Callback implementation for Ash.Query.Operator.evaluate/1 .

### Ash.Query.Operator.NotEq.name/0 (function)

### Ash.Query.Operator.NotEq.operator/0 (function)

### Ash.Policy.Check.AccessingFrom (module)

This check is true when the current action is being run "through" a relationship.

### Ash.Policy.Check.AccessingFrom.eager_evaluate?/0 (function)

Callback implementation for Ash.Policy.Check.eager_evaluate?/0 .

### Ash.Policy.Check.AccessingFrom.prefer_expanded_description?/0 (function)

Callback implementation for Ash.Policy.Check.prefer_expanded_description?/0 .

### Ash.Policy.Check.AccessingFrom.requires_original_data?/2 (function)

Callback implementation for Ash.Policy.Check.requires_original_data?/2 .

### Ash.Policy.Check.AccessingFrom.strict_check/3 (function)

Callback implementation for Ash.Policy.Check.strict_check/3 .

### Ash.Policy.Check.AccessingFrom.type/0 (function)

Callback implementation for Ash.Policy.Check.type/0 .

### Ash.Policy.Check.Action (module)

This check is true when the action name matches the provided action name.

### Ash.Policy.Check.Action.eager_evaluate?/0 (function)

Callback implementation for Ash.Policy.Check.eager_evaluate?/0 .

### Ash.Policy.Check.Action.prefer_expanded_description?/0 (function)

Callback implementation for Ash.Policy.Check.prefer_expanded_description?/0 .

### Ash.Policy.Check.Action.requires_original_data?/2 (function)

Callback implementation for Ash.Policy.Check.requires_original_data?/2 .

### Ash.Policy.Check.Action.strict_check/3 (function)

Callback implementation for Ash.Policy.Check.strict_check/3 .

### Ash.Policy.Check.Action.type/0 (function)

Callback implementation for Ash.Policy.Check.type/0 .

### Ash.Policy.Check.ActionType (module)

This check is true when the action type matches the provided type

### Ash.Policy.Check.ActionType.eager_evaluate?/0 (function)

Callback implementation for Ash.Policy.Check.eager_evaluate?/0 .

### Ash.Policy.Check.ActionType.prefer_expanded_description?/0 (function)

Callback implementation for Ash.Policy.Check.prefer_expanded_description?/0 .

### Ash.Policy.Check.ActionType.requires_original_data?/2 (function)

Callback implementation for Ash.Policy.Check.requires_original_data?/2 .

### Ash.Policy.Check.ActionType.strict_check/3 (function)

Callback implementation for Ash.Policy.Check.strict_check/3 .

### Ash.Policy.Check.ActionType.type/0 (function)

Callback implementation for Ash.Policy.Check.type/0 .

### Ash.Policy.Check.ActorAbsent (module)

This check is true when the actor is `nil`, and false when the actor is specified.

### Ash.Policy.Check.ActorAbsent.eager_evaluate?/0 (function)

Callback implementation for Ash.Policy.Check.eager_evaluate?/0 .

### Ash.Policy.Check.ActorAbsent.prefer_expanded_description?/0 (function)

Callback implementation for Ash.Policy.Check.prefer_expanded_description?/0 .

### Ash.Policy.Check.ActorAbsent.requires_original_data?/2 (function)

Callback implementation for Ash.Policy.Check.requires_original_data?/2 .

### Ash.Policy.Check.ActorAbsent.strict_check/3 (function)

Callback implementation for Ash.Policy.Check.strict_check/3 .

### Ash.Policy.Check.ActorAbsent.type/0 (function)

Callback implementation for Ash.Policy.Check.type/0 .

### Ash.Policy.Check.ActorAttributeEquals (module)

This check is true when the value of the specified attribute of the actor equals the specified value.

### Ash.Policy.Check.ActorAttributeEquals.eager_evaluate?/0 (function)

Callback implementation for Ash.Policy.Check.eager_evaluate?/0 .

### Ash.Policy.Check.ActorAttributeEquals.prefer_expanded_description?/0 (function)

Callback implementation for Ash.Policy.Check.prefer_expanded_description?/0 .

### Ash.Policy.Check.ActorAttributeEquals.requires_original_data?/2 (function)

Callback implementation for Ash.Policy.Check.requires_original_data?/2 .

### Ash.Policy.Check.ActorAttributeEquals.strict_check/3 (function)

Callback implementation for Ash.Policy.Check.strict_check/3 .

### Ash.Policy.Check.ActorAttributeEquals.type/0 (function)

Callback implementation for Ash.Policy.Check.type/0 .

### Ash.Policy.Check.ActorPresent (module)

This check is true when there is an actor specified, and false when the actor is `nil`.

### Ash.Policy.Check.ActorPresent.eager_evaluate?/0 (function)

Callback implementation for Ash.Policy.Check.eager_evaluate?/0 .

### Ash.Policy.Check.ActorPresent.prefer_expanded_description?/0 (function)

Callback implementation for Ash.Policy.Check.prefer_expanded_description?/0 .

### Ash.Policy.Check.ActorPresent.requires_original_data?/2 (function)

Callback implementation for Ash.Policy.Check.requires_original_data?/2 .

### Ash.Policy.Check.ActorPresent.strict_check/3 (function)

Callback implementation for Ash.Policy.Check.strict_check/3 .

### Ash.Policy.Check.ActorPresent.type/0 (function)

Callback implementation for Ash.Policy.Check.type/0 .

### Ash.Policy.Check.ChangingAttributes (module)

This check is true when attribute changes correspond to the provided options.

### Ash.Policy.Check.ChangingAttributes.auto_filter/3 (function)

Callback implementation for Ash.Policy.Check.auto_filter/3 .

### Ash.Policy.Check.ChangingAttributes.auto_filter_not/3 (function)

### Ash.Policy.Check.ChangingAttributes.check/4 (function)

Callback implementation for Ash.Policy.Check.check/4 .

### Ash.Policy.Check.ChangingAttributes.eager_evaluate?/0 (function)

Callback implementation for Ash.Policy.Check.eager_evaluate?/0 .

### Ash.Policy.Check.ChangingAttributes.expand_description/3 (function)

Callback implementation for Ash.Policy.Check.expand_description/3 .

### Ash.Policy.Check.ChangingAttributes.prefer_expanded_description?/0 (function)

Callback implementation for Ash.Policy.Check.prefer_expanded_description?/0 .

### Ash.Policy.Check.ChangingAttributes.reject/3 (function)

Callback implementation for Ash.Policy.FilterCheck.reject/3 .

### Ash.Policy.Check.ChangingAttributes.requires_original_data?/2 (function)

Callback implementation for Ash.Policy.Check.requires_original_data?/2 .

### Ash.Policy.Check.ChangingAttributes.strict_check/3 (function)

Callback implementation for Ash.Policy.Check.strict_check/3 .

### Ash.Policy.Check.ChangingAttributes.strict_check_context/1 (function)

### Ash.Policy.Check.ChangingAttributes.type/0 (function)

Callback implementation for Ash.Policy.Check.type/0 .

### Ash.Policy.Check.ChangingRelationships (module)

This check is true when the specified relationship is changing

### Ash.Policy.Check.ChangingRelationships.eager_evaluate?/0 (function)

Callback implementation for Ash.Policy.Check.eager_evaluate?/0 .

### Ash.Policy.Check.ChangingRelationships.prefer_expanded_description?/0 (function)

Callback implementation for Ash.Policy.Check.prefer_expanded_description?/0 .

### Ash.Policy.Check.ChangingRelationships.requires_original_data?/2 (function)

Callback implementation for Ash.Policy.Check.requires_original_data?/2 .

### Ash.Policy.Check.ChangingRelationships.strict_check/3 (function)

Callback implementation for Ash.Policy.Check.strict_check/3 .

### Ash.Policy.Check.ChangingRelationships.type/0 (function)

Callback implementation for Ash.Policy.Check.type/0 .

### Ash.Policy.Check.ContextEquals (module)

This check is true when the value of the specified key or path in the changeset or query context equals the specified value.

### Ash.Policy.Check.ContextEquals.eager_evaluate?/0 (function)

Callback implementation for Ash.Policy.Check.eager_evaluate?/0 .

### Ash.Policy.Check.ContextEquals.prefer_expanded_description?/0 (function)

Callback implementation for Ash.Policy.Check.prefer_expanded_description?/0 .

### Ash.Policy.Check.ContextEquals.requires_original_data?/2 (function)

Callback implementation for Ash.Policy.Check.requires_original_data?/2 .

### Ash.Policy.Check.ContextEquals.strict_check/3 (function)

Callback implementation for Ash.Policy.Check.strict_check/3 .

### Ash.Policy.Check.ContextEquals.type/0 (function)

Callback implementation for Ash.Policy.Check.type/0 .

### Ash.Policy.Check.Expression (module)

The check module used for `expr`s in policies

### Ash.Policy.Check.Expression.auto_filter/3 (function)

Callback implementation for Ash.Policy.Check.auto_filter/3 .

### Ash.Policy.Check.Expression.auto_filter_not/3 (function)

### Ash.Policy.Check.Expression.check/4 (function)

Callback implementation for Ash.Policy.Check.check/4 .

### Ash.Policy.Check.Expression.eager_evaluate?/0 (function)

Callback implementation for Ash.Policy.Check.eager_evaluate?/0 .

### Ash.Policy.Check.Expression.expand_description/3 (function)

Callback implementation for Ash.Policy.Check.expand_description/3 .

### Ash.Policy.Check.Expression.reject/3 (function)

Callback implementation for Ash.Policy.FilterCheck.reject/3 .

### Ash.Policy.Check.Expression.requires_original_data?/2 (function)

Callback implementation for Ash.Policy.Check.requires_original_data?/2 .

### Ash.Policy.Check.Expression.strict_check/3 (function)

Callback implementation for Ash.Policy.Check.strict_check/3 .

### Ash.Policy.Check.Expression.strict_check_context/1 (function)

### Ash.Policy.Check.Expression.type/0 (function)

Callback implementation for Ash.Policy.Check.type/0 .

### Ash.Policy.Check.FilteringOn (module)

This check is true when the field provided is being referenced anywhere in a filter statement.

### Ash.Policy.Check.FilteringOn.eager_evaluate?/0 (function)

Callback implementation for Ash.Policy.Check.eager_evaluate?/0 .

### Ash.Policy.Check.FilteringOn.prefer_expanded_description?/0 (function)

Callback implementation for Ash.Policy.Check.prefer_expanded_description?/0 .

### Ash.Policy.Check.FilteringOn.requires_original_data?/2 (function)

Callback implementation for Ash.Policy.Check.requires_original_data?/2 .

### Ash.Policy.Check.FilteringOn.strict_check/3 (function)

Callback implementation for Ash.Policy.Check.strict_check/3 .

### Ash.Policy.Check.FilteringOn.type/0 (function)

Callback implementation for Ash.Policy.Check.type/0 .

### Ash.Policy.Check.Loading (module)

This check is true when the field or relationship, or path to field, is being loaded and false when it is not.

### Ash.Policy.Check.Loading.eager_evaluate?/0 (function)

Callback implementation for Ash.Policy.Check.eager_evaluate?/0 .

### Ash.Policy.Check.Loading.prefer_expanded_description?/0 (function)

Callback implementation for Ash.Policy.Check.prefer_expanded_description?/0 .

### Ash.Policy.Check.Loading.requires_original_data?/2 (function)

Callback implementation for Ash.Policy.Check.requires_original_data?/2 .

### Ash.Policy.Check.Loading.strict_check/3 (function)

Callback implementation for Ash.Policy.Check.strict_check/3 .

### Ash.Policy.Check.Loading.type/0 (function)

Callback implementation for Ash.Policy.Check.type/0 .

### Ash.Policy.Check.Matches (module)

This check is true when the specified function returns true

### Ash.Policy.Check.Matches.eager_evaluate?/0 (function)

Callback implementation for Ash.Policy.Check.eager_evaluate?/0 .

### Ash.Policy.Check.Matches.prefer_expanded_description?/0 (function)

Callback implementation for Ash.Policy.Check.prefer_expanded_description?/0 .

### Ash.Policy.Check.Matches.requires_original_data?/2 (function)

Callback implementation for Ash.Policy.Check.requires_original_data?/2 .

### Ash.Policy.Check.Matches.strict_check/3 (function)

Callback implementation for Ash.Policy.Check.strict_check/3 .

### Ash.Policy.Check.Matches.type/0 (function)

Callback implementation for Ash.Policy.Check.type/0 .

### Ash.Policy.Check.RelatesToActorVia (module)

This check passes if the data relates to the actor via the specified relationship or path of relationships.

### Ash.Policy.Check.RelatesToActorVia.auto_filter/3 (function)

Callback implementation for Ash.Policy.Check.auto_filter/3 .

### Ash.Policy.Check.RelatesToActorVia.auto_filter_not/3 (function)

### Ash.Policy.Check.RelatesToActorVia.check/4 (function)

Callback implementation for Ash.Policy.Check.check/4 .

### Ash.Policy.Check.RelatesToActorVia.eager_evaluate?/0 (function)

Callback implementation for Ash.Policy.Check.eager_evaluate?/0 .

### Ash.Policy.Check.RelatesToActorVia.expand_description/3 (function)

Callback implementation for Ash.Policy.Check.expand_description/3 .

### Ash.Policy.Check.RelatesToActorVia.prefer_expanded_description?/0 (function)

Callback implementation for Ash.Policy.Check.prefer_expanded_description?/0 .

### Ash.Policy.Check.RelatesToActorVia.requires_original_data?/2 (function)

Callback implementation for Ash.Policy.Check.requires_original_data?/2 .

### Ash.Policy.Check.RelatesToActorVia.strict_check/3 (function)

Callback implementation for Ash.Policy.Check.strict_check/3 .

### Ash.Policy.Check.RelatesToActorVia.strict_check_context/1 (function)

### Ash.Policy.Check.RelatesToActorVia.type/0 (function)

Callback implementation for Ash.Policy.Check.type/0 .

### Ash.Policy.Check.RelatingToActor (module)

This check is true when the specified relationship is being changed to the current actor.

### Ash.Policy.Check.RelatingToActor.auto_filter/3 (function)

Callback implementation for Ash.Policy.Check.auto_filter/3 .

### Ash.Policy.Check.RelatingToActor.auto_filter_not/3 (function)

### Ash.Policy.Check.RelatingToActor.check/4 (function)

Callback implementation for Ash.Policy.Check.check/4 .

### Ash.Policy.Check.RelatingToActor.eager_evaluate?/0 (function)

Callback implementation for Ash.Policy.Check.eager_evaluate?/0 .

### Ash.Policy.Check.RelatingToActor.expand_description/3 (function)

Callback implementation for Ash.Policy.Check.expand_description/3 .

### Ash.Policy.Check.RelatingToActor.prefer_expanded_description?/0 (function)

Callback implementation for Ash.Policy.Check.prefer_expanded_description?/0 .

### Ash.Policy.Check.RelatingToActor.reject/3 (function)

Callback implementation for Ash.Policy.FilterCheck.reject/3 .

### Ash.Policy.Check.RelatingToActor.requires_original_data?/2 (function)

Callback implementation for Ash.Policy.Check.requires_original_data?/2 .

### Ash.Policy.Check.RelatingToActor.strict_check/3 (function)

Callback implementation for Ash.Policy.Check.strict_check/3 .

### Ash.Policy.Check.RelatingToActor.strict_check_context/1 (function)

### Ash.Policy.Check.RelatingToActor.type/0 (function)

Callback implementation for Ash.Policy.Check.type/0 .

### Ash.Policy.Check.Resource (module)

This check is true when the resource matches the provided resource name or names.

### Ash.Policy.Check.Resource.eager_evaluate?/0 (function)

Callback implementation for Ash.Policy.Check.eager_evaluate?/0 .

### Ash.Policy.Check.Resource.prefer_expanded_description?/0 (function)

Callback implementation for Ash.Policy.Check.prefer_expanded_description?/0 .

### Ash.Policy.Check.Resource.requires_original_data?/2 (function)

Callback implementation for Ash.Policy.Check.requires_original_data?/2 .

### Ash.Policy.Check.Resource.strict_check/3 (function)

Callback implementation for Ash.Policy.Check.strict_check/3 .

### Ash.Policy.Check.Resource.type/0 (function)

Callback implementation for Ash.Policy.Check.type/0 .

### Ash.Policy.Check.Selecting (module)

This check is true when the field is being selected and false when it is not.

### Ash.Policy.Check.Selecting.eager_evaluate?/0 (function)

Callback implementation for Ash.Policy.Check.eager_evaluate?/0 .

### Ash.Policy.Check.Selecting.prefer_expanded_description?/0 (function)

Callback implementation for Ash.Policy.Check.prefer_expanded_description?/0 .

### Ash.Policy.Check.Selecting.requires_original_data?/2 (function)

Callback implementation for Ash.Policy.Check.requires_original_data?/2 .

### Ash.Policy.Check.Selecting.strict_check/3 (function)

Callback implementation for Ash.Policy.Check.strict_check/3 .

### Ash.Policy.Check.Selecting.type/0 (function)

Callback implementation for Ash.Policy.Check.type/0 .

### Ash.Policy.Check.Static (module)

This check is always the result provided

### Ash.Policy.Check.Static.eager_evaluate?/0 (function)

Callback implementation for Ash.Policy.Check.eager_evaluate?/0 .

### Ash.Policy.Check.Static.prefer_expanded_description?/0 (function)

Callback implementation for Ash.Policy.Check.prefer_expanded_description?/0 .

### Ash.Policy.Check.Static.requires_original_data?/2 (function)

Callback implementation for Ash.Policy.Check.requires_original_data?/2 .

### Ash.Policy.Check.Static.strict_check/3 (function)

Callback implementation for Ash.Policy.Check.strict_check/3 .

### Ash.Policy.Check.Static.type/0 (function)

Callback implementation for Ash.Policy.Check.type/0 .

### Ash.Resource.Change.CascadeDestroy (module)

Cascade a resource's destroy action to a related resource's destroy action.

If after_action? is true this change adds an after-action hook that explicitly
calls destroy on any records related via the named relationship. It will optimise
for bulk destroys where possible. This makes it safe to use in atomic actions, but
might not be possible depending on the data layer setup (see warning below).

If after_action? is false this change will add a before-action hook for relationships
where the child record points to the parent (has_many, has_one, many_to_many).

> #### Beware database constraints {: .warning}
>
> Think carefully before using this change with data layers which enforce
> referential integrity (ie PostgreSQL and SQLite) and you may need to defer
> constraints for the relationship in question.
>
> See also:
>
> 1. [`postgres.references.reference.deferrable` DSL](https://hexdocs.pm/ash_postgres/dsl-ashpostgres-datalayer.html#postgres-references-reference-deferrable)
> 2. [`sqlite.references.reference.deferrable` DSL](https://hexdocs.pm/ash_sqlite/dsl-ashsqlite-datalayer.html#sqlite-references-reference-deferrable)
> 3. [PostgreSQL's `SET CONSTRAINTS` documentation](https://www.postgresql.org/docs/current/sql-set-constraints.html)
> 4. [SQLite's `PRAGMA defer_foreign_keys` documentation](https://www.sqlite.org/pragma.html#pragma_defer_foreign_keys)

> #### Cascading notifications {: .tip}
>
> By default notifications are disabled for the related destroy. This is to avoid potentially sending a **lot** of notifications for high-cardinality relationships.

### Options - Ash.Resource.Change.CascadeDestroy (module)

- `:relationship` (`t:atom/0`) - Required. The name of the relationship to work on

- `:action` (`t:atom/0`) - The name of the destroy action to call on the related resource. Uses the primary destroy by default.

- `:read_action` (`t:atom/0`) - The name of the read action to call on the related resource to find results to be destroyed

- `:return_notifications?` (`t:boolean/0`) - Return notifications for all destroyed records? The default value is `false`.

- `:after_action?` (`t:boolean/0`) - If true all the cascade destroys are done in after_action hooks. This makes it safe to use in atomic actions The default value is `true`.

### Example - Ash.Resource.Change.CascadeDestroy (module)

change {Ash.Resource.Change.CascadeDestroy, relationship: :comments, action: :destroy}

or, equivalently using `Ash.Resource.Change.Builtins.cascade_destroy/2`:

    change cascade_destroy(:comments, action: :destroy)

### Ash.Resource.Change.CascadeUpdate (module)

Cascade a resource's update action to a related resource's update action.

Adds an after-action hook that explicitly calls update on any records related
via the named relationship. It will optimise for bulk updates where
possible.

Allows you to copy fields from the arguments or changes to the destination,
this way you can cascade a bunch of changes downstream.

> #### Beware database constraints {: .warning}
>
> Think carefully before using this change with data layers which enforce
> referential integrity (ie PostgreSQL and SQLite) and you may need to defer
> constraints for the relationship in question.
>
> See also:
>
> 1. [`postgres.references.reference.deferrable` DSL](https://hexdocs.pm/ash_postgres/dsl-ashpostgres-datalayer.html#postgres-references-reference-deferrable)
> 2. [`sqlite.references.reference.deferrable` DSL](https://hexdocs.pm/ash_sqlite/dsl-ashsqlite-datalayer.html#sqlite-references-reference-deferrable)
> 3. [PostgreSQL's `SET CONSTRAINTS` documentation](https://www.postgresql.org/docs/current/sql-set-constraints.html)
> 4. [SQLite's `PRAGMA defer_foreign_keys` documentation](https://www.sqlite.org/pragma.html#pragma_defer_foreign_keys)

> #### Cascading notifications {: .tip}
>
> By default notifications are disabled for the related updates. This is to avoid potentially sending a **lot** of notifications for high-cardinality relationships.

### Options - Ash.Resource.Change.CascadeUpdate (module)

- `:relationship` (`t:atom/0`) - Required. The name of the relationship to work on

- `:action` (`t:atom/0`) - The name of the update action to call on the related resource. Uses the primary update by default.

- `:copy_inputs` (list of `t:atom/0`) - A list of fields to copy & pass on to the downstream update. The source action cannot be atomic. The default value is `[]`.

- `:read_action` (`t:atom/0`) - The name of the read action to call on the related resource to find results to be updated

- `:return_notifications?` (`t:boolean/0`) - Return notifications for all updated records? The default value is `false`.

### Example - Ash.Resource.Change.CascadeUpdate (module)

change {Ash.Resource.Change.CascadeUpdate, relationship: :comments, action: :update_all, copy_inputs: [:name]}

    or, equivalently using `Ash.Resource.Change.Builtins.cascade_update/2`:

    change cascade_update(:comments, action: :update_all, copy_inputs: [:name])

### Ash.Resource.Change.Context (module)

The context for a change.

This is passed into various callbacks for `Ash.Resource.Change`.

### Ash.Resource.Change.Context.t/0 (type)

### Ash.Resource.Change.GetAndLock (module)

Refetches the record being updated or destroyed, and locks it with the given type.

### Ash.Resource.Change.GetAndLockForUpdate (module)

Refetches the record being updated or destroyed, and locks it for update.

### Ash.Resource.Change.Increment (module)

Increments an attribute's value by the amount specified, which defaults to 1.

### Ash.Resource.Change.OptimisticLock (module)

Apply an "optimistic lock" on a record being updated or destroyed.

### What is Optimistic Locking? - Ash.Resource.Change.OptimisticLock (module)

Optimistic Locking is the process of only allowing an update to occur if the version of a record that you have in memory is the same as the version in the database.
Otherwise, an error is returned. On success, it increments the version while performing the action.

Optimistic locking may used for two primary purposes:

### User Experience - Ash.Resource.Change.OptimisticLock (module)

For example, if a user is editing a form that contains `State` and `County` fields, and they change the `County`, while another user has used the form to change the `State`, you could end up with a mismatch between `State` and `County`.

With optimistic locking, the user will instead get an error message that the record has been changed since they last looked.

### Concurrency Safety - Ash.Resource.Change.OptimisticLock (module)

Optimistic locking can make actions safe to run concurrently even if they can't be performed in a single query (atomically), by returning an error if the resource in the data layer does not have the same version as the one being edited.

This tells the user that they need to reload and try again.

### Ash.Resource.Validation.ActionIs (module)

Validates that the action is the specified action.

### Ash.Resource.Validation.Context (module)

Context for a validation.

### Ash.Resource.Validation.Context.t/0 (type)

### Ash.Actions.BulkManualActionHelpers (module)

Helper functions used for handling manual actions when used in bulk operations.

### Ash.Actions.BulkManualActionHelpers.process_bulk_results/7 (function)

Processes the results of a manual action's bulk function.

### Ash.Actions.BulkManualActionHelpers.process_non_bulk_result/3 (function)

Used when a manual action does not export a bulk version of the action.

### Ash.Actions.Read.AsyncLimiter (module)

A utility for limiting the number of concurrent async operations

Because this is an optimization, we opt to run something synchronously
if there is no async task available in the slot. The idea here is that
the _vast_ majority of things we do async will be fast enough not to
warrant always waiting for an async slot to be free. We may add in some
smarter heuristics later (i.e choosing to wait for a task instead of
doing the work sync), but for now this is a good start.

### Ash.Actions.Read.AsyncLimiter.async_or_inline/4 (function)

### Ash.Actions.Read.AsyncLimiter.await_all/1 (function)

### Ash.Actions.Read.AsyncLimiter.await_at_least_one/1 (function)

### Ash.Actions.Read.AsyncLimiter.child_spec/1 (function)

Returns a specification to start this module under a supervisor.

See `Supervisor`.

### Ash.Actions.Read.AsyncLimiter.start_link/1 (function)

### Ash.Can (module)

Contains the Ash.can function logic.

### Ash.Can.can/4 (function)

Returns a an ok tuple if the actor can perform the action, query, or changeset,
an error tuple if an error happens, and a ok tuple with maybe if maybe is set to true
or not set.

You should prefer to use `Ash.can/3` over this module, directly.

Note: `is_maybe` is set to `true`, if not set.

### Ash.Can.can?/4 (function)

Returns whether an actor can perform an action, query, or changeset.

You should prefer to use `Ash.can?/3` over this module, directly.

Can raise an exception if return_forbidden_error is truthy in opts or there's an error.

### Ash.Can.subject/0 (type)

### Ash.Changeset.OriginalDataNotAvailable (module)

A value placed in changeset.data to indicate that the original data is not available

### Ash.Changeset.OriginalDataNotAvailable.t/0 (type)

### Ash.Context (module)

Functions for working with the context provided to various callbacks in Ash.

### Ash.Context.context_keyword_list/0 (type)

### Ash.Context.to_opts/2 (function)

Copies keys from the given context map into a keyword list. Does _not_ copy the `:domain` key.

Keys copied:

- `:actor`
- `:authorize?`
- `:tracer`
- `:tenant`

### Ash.CustomExpression (behaviour)

A module for defining custom functions that can be called in Ash expressions.

For example:

```elixir
defmodule MyApp.Expressions.LevenshteinDistance do
  use Ash.CustomExpression,
    name: :levenshtein,
    arguments: [
      [:string, :string]
    ]

  def expression(AshPostgres.DataLayer, [left, right]) do
    {:ok, expr(fragment("levenshtein(?, ?)", ^left, ^right))}
  end

  # It is good practice to always define an expression for `Ash.DataLayer.Simple`,
  # as that is what Ash will use to run your custom expression in Elixir.
  # This allows us to completely avoid communicating with the database in some cases.

  # Always use a fragment like this to evaluate code in simple data layers. The value you
  # get here for arguments may be expressions at this point.
  def expression(data_layer, [left, right]) when data_layer in [
    Ash.DataLayer.Ets,
    Ash.DataLayer.Simple
  ] do
    {:ok, expr(fragment(&__MODULE__.levenshtein/2, ^left, ^right))}
  end

  # always define this fallback clause as well
  def expression(_data_layer, _args), do: :unknown

  @doc "Computes the levenshtein distance of two strings"
  def levenshtein(left, right) do
    # ......
  end
end
```

### Options - Ash.CustomExpression (behaviour)

- `name` - The name of the custom expression. This is the name that will be used in Ash expressions.
- `arguments` - A list of lists of types that the custom expression accepts. Each list represents a set of arguments that the custom expression can accept.
- `predicate?` - Whether this expression can be exposed as a predicate in filter interfaces. Defaults to `false`.

### Registering Your Expression - Ash.CustomExpression (behaviour)

Use compile-time configuration to register your custom expressions

```elixir
config :ash, :custom_expressions, [MyApp.Expressions.LevenshteinDistance]
```

### Ash.CustomExpression.arguments/0 (callback)

### Ash.CustomExpression.expression/2 (callback)

### Ash.CustomExpression.name/0 (callback)

### Ash.Domain.Igniter (module)

Codemods for working with Ash.Domain modules

### Ash.Domain.Igniter.add_new_code_interface/5 (function)

Adds a code interface if not present to the given resource on the given domain

### Ash.Domain.Igniter.add_resource_reference/3 (function)

Adds a resource reference to a domain's `resources` block

### Ash.Domain.Igniter.list_domains/1 (function)

List all domain modules found in the project

### Ash.Domain.Igniter.remove_resource_reference/3 (function)

Removes a resource reference from a domain's `resources` block

### Ash.Extension (behaviour)

A behavior of additional callbacks that extensions can implement, specific to Ash.

It is not necessary to adopt this behavior, but it is recommended to do so if you want to define these
functions on your extension. These functions are invoked when their relevant Mix task is run.

### Ash.Extension.argv/0 (type)

### Ash.Extension.codegen/1 (callback)

### Ash.Extension.igniter/0 (type)

### Ash.Extension.install/5 (callback)

### Ash.Extension.migrate/1 (callback)

### Ash.Extension.reset/1 (callback)

### Ash.Extension.rollback/1 (callback)

### Ash.Extension.setup/1 (callback)

### Ash.Extension.tear_down/1 (callback)

### Ash.Igniter (module)

Codemods and utilities for working with Ash & Igniter

### Ash.Igniter.codegen/2 (function)

Adds a codegen task, or updates the name to be ` _and_name`

### Ash.Info (module)

General introspection helpers for Ash applications.

Use `Ash.Info.mermaid_overview(otp_app)` to generate a mermaid chart of the application's domains and resources.
This offers a high level view, but will not include information from extensions. Use `resource_report/2`
for a detailed report of a resource.

Use `Ash.Info.mermaid_overview(otp_app, type: :entity_relationship)` to get a simplified entity relationship diagram.

Use `Ash.Info.domains_and_resources(otp_app)` to get a map where the keys are the domains, and the value is the list
of resources for that domain.

### Ash.Info.domains/1 (function)

### Ash.Info.domains_and_resources/1 (function)

Returns a map where the keys are the domains, and the value is the list of resources for that domain.

### Ash.Info.mermaid_overview/2 (function)

Generate a mermaid chart of the application's domains and resources.

This offers a high level view, but will not include information from extensions.

### Ash.Policy.PolicyGroup (module)

Represents a policy group on an Ash.Resource

### Ash.Query.Combination (module)

Represents one combination in a combination of queries.

### Ash.Query.Combination.base/1 (function)

The initial combination of a combined query.

### Ash.Query.Combination.except/1 (function)

Removes all rows that are present in the previous combinations _and_ this one.

### Ash.Query.Combination.intersect/1 (function)

Intersects the query with the previous combinations, keeping only rows that are present in the previous combinations and this one.

### Ash.Query.Combination.t/0 (type)

### Ash.Query.Combination.union/1 (function)

Unions the query with the previous combinations, discarding duplicates when all fields are equal.

### Ash.Query.Combination.union_all/1 (function)

Unions the query with the previous combinations, keeping all rows.

### Ash.Query.UpsertConflict (module)

Returns the conflicting new information.

### Ash.Query.UpsertConflict.new/1 (function)

### Ash.Reactor.ActionStep (module)

The Reactor step which is used to execute generic actions.

### Ash.Reactor.AshStep (module)

A reactor step which runs a step-module or an anonymous function, and enqueues any returned
notifications before returning.

The following return values are supported: `{:ok, result}`, `{:ok, result, notifications}`,
`{:ok, result, notifications, new_steps}`

Example:

```elixir
ash_step :maybe_update_post do
  run fn %{post: post, new_amount_of_likes: new_amount_of_likes}, ctx ->
    opts = Ash.Context.to_opts(ctx, return_notifications?: true)
    if post.amount_of_likes != new_amount_of_likes do
      Post.update(post, %{amount_of_likes: new_amount_of_likes}, opts)
    else
      {:ok, post}
    end
end
```

### Options - Ash.Reactor.AshStep (module)

- `run` - a one or two arity function or MFA which will be called as the run
  function of the step.
- `compensate` - a one to three arity function or MFA which will be called as
  the compensate function of the step. Optional.
- `undo` - a one to three arity function or MFA which will be called as the
  undo function of this step. Optional.

### Ash.Reactor.BulkCreateStep (module)

The Reactor stop which is used to execute create actions in bulk.

### Ash.Reactor.BulkUpdateStep (module)

The Reactor stop which is used to execute create actions in bulk.

### Ash.Reactor.ChangeStep (module)

The Reactor step which is used to execute change steps.

### Ash.Reactor.CreateStep (module)

The Reactor step which is used to execute create actions.

### Ash.Reactor.DestroyStep (module)

The Reactor step which is used to execute update actions.

### Ash.Reactor.Dsl.Action (module)

The `action` entity for the `Ash.Reactor` reactor extension.

### Ash.Reactor.Dsl.Action.t/0 (type)

### Ash.Reactor.Dsl.ActionLoad (module)

Add a load statement to an action.

### Ash.Reactor.Dsl.ActionLoad.t/0 (type)

### Ash.Reactor.Dsl.ActionTransformer (module)

Responsible for transforming actions.

### Ash.Reactor.Dsl.ActionTransformer.after?/1 (function)

Callback implementation for Spark.Dsl.Transformer.after?/1 .

### Ash.Reactor.Dsl.ActionTransformer.after_compile?/0 (function)

Callback implementation for Spark.Dsl.Transformer.after_compile?/0 .

### Ash.Reactor.Dsl.Actor (module)

Specify the actor used to execute an action.

### Ash.Reactor.Dsl.Actor.t/0 (type)

### Ash.Reactor.Dsl.AshStep (module)

The ash_step DSL module.

See `d:Reactor.step`.

### Ash.Reactor.Dsl.AshStep.t/0 (type)

### Ash.Reactor.Dsl.BulkCreate (module)

The `bulk_create` entity for the `Ash.Reactor` reactor extension.

### Ash.Reactor.Dsl.BulkCreate.t/0 (type)

### Ash.Reactor.Dsl.BulkUpdate (module)

The `bulk_update` entity for the `Ash.Reactor` reactor extension.

### Ash.Reactor.Dsl.BulkUpdate.t/0 (type)

### Ash.Reactor.Dsl.Change (module)

The `change` entity for the `Ash.Reactor` reactor extension.

### Ash.Reactor.Dsl.Change.t/0 (type)

### Ash.Reactor.Dsl.Context (module)

Specify context to merge into an action's context.

### Ash.Reactor.Dsl.Context.t/0 (type)

### Ash.Reactor.Dsl.Create (module)

The `create` entity for the `Ash.Reactor` reactor extension.

### Ash.Reactor.Dsl.Create.t/0 (type)

### Ash.Reactor.Dsl.Destroy (module)

The `destroy` entity for the `Ash.Reactor` reactor extension.

### Ash.Reactor.Dsl.Destroy.t/0 (type)

### Ash.Reactor.Dsl.Inputs (module)

The `inputs` entity for the `Ash.Reactor` reactor extension.

### Ash.Reactor.Dsl.Inputs.t/0 (type)

### Ash.Reactor.Dsl.Load (module)

The `load` step entity for the `Ash.Reactor` reactor extension.

### Ash.Reactor.Dsl.Load.t/0 (type)

### Ash.Reactor.Dsl.MiddlewareTransformer (module)

Ensures that the required middlewares are added to the Reactor.

### Ash.Reactor.Dsl.MiddlewareTransformer.after?/1 (function)

Callback implementation for Spark.Dsl.Transformer.after?/1 .

### Ash.Reactor.Dsl.MiddlewareTransformer.after_compile?/0 (function)

Callback implementation for Spark.Dsl.Transformer.after_compile?/0 .

### Ash.Reactor.Dsl.Read (module)

The `read` entity for the `Ash.Reactor` reactor extension.

### Ash.Reactor.Dsl.Read.t/0 (type)

### Ash.Reactor.Dsl.ReadOne (module)

The `read_one` entity for the `Ash.Reactor` reactor extension.

### Ash.Reactor.Dsl.ReadOne.t/0 (type)

### Ash.Reactor.Dsl.Tenant (module)

Specify the tenant used to execute an action.

### Ash.Reactor.Dsl.Tenant.t/0 (type)

### Ash.Reactor.Dsl.Transaction (module)

The `transaction` entity for the `Ash.Reactor` reactor extension.

### Ash.Reactor.Dsl.Transaction.t/0 (type)

### Ash.Reactor.Dsl.Update (module)

The `update` entity for the `Ash.Reactor` reactor extension.

### Ash.Reactor.Dsl.Update.t/0 (type)

### Ash.Reactor.LoadStep (module)

The Reactor step which is used to execute load steps.

### Ash.Reactor.LoadStep.run/3 (function)

Callback implementation for Reactor.Step.run/3 .

### Ash.Reactor.MergeInputsStep (module)

A custom step which merges any number of `inputs` results into a single map.

### Ash.Reactor.Notifications (module)

Reactor middleware used to collect and emit notifications upon successful
completion of the Reactor.

### Ash.Reactor.Notifications.complete/2 (function)

When the reactor completes successfully, publish any queued notifications.

### Ash.Reactor.Notifications.enqueue_notifications/2 (function)

Add notifications to the queue to be published on reactor success.

### Ash.Reactor.Notifications.error/2 (function)

When the reactor fails, discard any queued notifications.

### Ash.Reactor.Notifications.halt/1 (function)

When halting the reactor, store any queued notifications in the context for
eventual resumption.

### Ash.Reactor.Notifications.init/1 (function)

When starting a reactor, start an agent to act as a temporary store of
notifications.

### Ash.Reactor.Notifications.publish/2 (function)

Dispatch notifications.

### Ash.Reactor.ReadOneStep (module)

The Reactor step which is used to execute get actions.

### Ash.Reactor.ReadOneStep.run/3 (function)

Callback implementation for Reactor.Step.run/3 .

### Ash.Reactor.ReadStep (module)

The Reactor step which is used to execute read actions.

### Ash.Reactor.ReadStep.run/3 (function)

Callback implementation for Reactor.Step.run/3 .

### Ash.Reactor.Tracer (module)

Reactor middleware which threads Ash's tracing information through to new
processes spawned by Reactor.

### Ash.Reactor.TransactionStep (module)

The Reactor step which is used to wrap other steps in an Ash data layer
transaction.

### Ash.Reactor.TransactionStep.run/3 (function)

Callback implementation for Reactor.Step.run/3 .

### Ash.Reactor.UpdateStep (module)

The Reactor step which is used to execute update actions.

### Ash.Resource.Dsl.Filter (module)

Introspection target for a filter for read actions and relationships

### Ash.Resource.Igniter (module)

Codemods for working with Ash.Resource modules

### Important Details - Ash.Resource.Igniter (module)

This interrogates _the source code_ of a resource, not its ultimate compiled state.
What this means, is that things like `defines_attribute` will not return `true` if
the attribute is added by an extension. Only if it appears literally in the source code
of the resource or one of its `Spark.Dsl.Fragment`s.

### Ash.Resource.Igniter.add_action/3 (function)

Adds the given code block to the resource's `actions` block

### Ash.Resource.Igniter.add_attribute/3 (function)

Adds the given code block to the resource's `attributes` block

### Ash.Resource.Igniter.add_block/4 (function)

Adds the given code block to the block of the resource specified

### Ash.Resource.Igniter.add_bypass/4 (function)

Adds a bypass to the top of the resource's `policies` block

### Ash.Resource.Igniter.add_calculation/3 (function)

Adds the given code block to the resource's `calculations` block

### Ash.Resource.Igniter.add_identity/3 (function)

Adds the given code block to the resource's `identities` block

### Ash.Resource.Igniter.add_new_action/4 (function)

Adds an action if it doesn't already exist

### Ash.Resource.Igniter.add_new_attribute/4 (function)

Adds the given code block to the resource's `attributes` block if there is no existing attribute with the given name

### Ash.Resource.Igniter.add_new_calculation/4 (function)

Adds the given code block to the resource's `calculations` block if there is no existing calculation with the given name

### Ash.Resource.Igniter.add_new_identity/4 (function)

Adds the given code block to the resource's `identities` block if there is no existing identity with the given name

### Ash.Resource.Igniter.add_new_relationship/4 (function)

Adds the given code block to the resource's `relationships` block

### Ash.Resource.Igniter.add_policy/4 (function)

Adds a policy to the bottom of the resource's `policies` block

### Ash.Resource.Igniter.add_relationship/3 (function)

Adds the given code block to the resource's `relationships` block

### Ash.Resource.Igniter.add_resource_configuration/3 (function)

Adds the given code block to the resource's `resource` block

### Ash.Resource.Igniter.defines_action/3 (function)

Returns true if the given resource defines an action with the provided name

### Ash.Resource.Igniter.defines_attribute/3 (function)

Returns true if the given resource defines an attribute with the provided name

### Ash.Resource.Igniter.defines_calculation/3 (function)

Returns true if the given resource defines a calculation with the provided name

### Ash.Resource.Igniter.defines_identity/3 (function)

Returns true if the given resource defines an identity with the provided name

### Ash.Resource.Igniter.defines_relationship/3 (function)

Returns true if the given resource defines a relationship with the provided name

### Ash.Resource.Igniter.domain/2 (function)

Gets the domain from the given resource module

### Ash.Resource.Igniter.ensure_primary_action/3 (function)

### Ash.Resource.Igniter.ensure_timestamps/2 (function)

Ensures that created_at and updated_at timestamps exist on the resource

### Ash.Resource.Igniter.has_action_with_primary/3 (function)

### Ash.Resource.Igniter.list_resources/1 (function)

List all resource modules found in the project

### Ash.Resource.Igniter.resource_mods/1 (function)

### Ash.Resource.ManualCreate.BulkContext (module)

The context passed into manual bulk_create action functions

### Ash.Resource.ManualCreate.BulkContext.t/0 (type)

### Ash.Resource.ManualCreate.Context (module)

The context passed into manual create action functions

### Ash.Resource.ManualCreate.Context.t/0 (type)

### Ash.Resource.ManualDestroy.BulkContext (module)

The context passed into manual bulk_update action functions

### Ash.Resource.ManualDestroy.BulkContext.t/0 (type)

### Ash.Resource.ManualDestroy.Context (module)

The context passed into manual update action functions

### Ash.Resource.ManualDestroy.Context.t/0 (type)

### Ash.Resource.ManualRelationship.Context (module)

The context passed into manual relationship functions

### Ash.Resource.ManualRelationship.Context.t/0 (type)

### Ash.Resource.ManualUpdate.BulkContext (module)

The context passed into manual update action functions

### Ash.Resource.ManualUpdate.BulkContext.t/0 (type)

### Ash.Resource.ManualUpdate.Context (module)

The context passed into manual update action functions

### Ash.Resource.ManualUpdate.Context.t/0 (type)

### Ash.Resource.Preparation.Context (module)

The context for a preparation.

### Ash.Resource.Preparation.Context.t/0 (type)

### Ash.ToTenant (protocol)

Converts a value to a tenant. To add this to a resource, implement the protocol like so:application

What this should do is entirely dependent on how you've set up your tenants. This example assumes
that you want the tenant to be `org_#{organization_id}`, but it could also be something like
`organization.schema`.

```elixir
defmodule MyApp.Organization do
  use Ash.Resource, ...

  ...

  defimpl Ash.ToTenant do
    def to_tenant(%{id: id}, _resource), do: "org_#{id}"
  end
end
```

### Ash.ToTenant.t/0 (type)

### Ash.ToTenant.to_tenant/2 (function)

### Comp (module)

Provides utilities to implement and work with `Comparable` types

### Comp.compare/2 (function)

Compare left and right term

### Examples - Comp.compare/2 (function)

iex> Comp.compare(1, 2)
:lt
iex> Comp.compare(2, 1)
:gt
iex> Comp.compare(1, 1)
:eq

### Comp.defcomparable/3 (macro)

Helper to define ordering relation for pair of types,
accepts two `term :: type` pairs
and block of code where relation is described.

### Examples - Comp.defcomparable/3 (macro)

iex> quote do
...> use Comp
...> defmodule Foo do
...> defstruct [:value, :meta]
...> end
...> defmodule Bar do
...> defstruct [:value, :meta]
...> end
...> defcomparable %Foo{value: left} :: Foo, %Foo{value: right} :: Foo do
...> Comp.compare(left, right)
...> end
...> defcomparable %Foo{value: left} :: Foo, %Bar{value: right} :: Bar do
...> Comp.compare(left, right)
...> end
...> defcomparable %Foo{value: left} :: Foo, right :: Integer do
...> Comp.compare(left, right)
...> end
...> end
...> |> Code.compile_quoted
iex> quote do
...> x = %Foo{value: 1, meta: 1}
...> y = %Foo{value: 1, meta: 2}
...> Comp.equal?(x, y) && Comp.equal?(y, x)
...> end
...> |> Code.eval_quoted
...> |> elem(0)
true
iex> quote do
...> x = %Foo{value: 1, meta: 1}
...> y = %Bar{value: 1, meta: 2}
...> Comp.equal?(x, y) && Comp.equal?(y, x)
...> end
...> |> Code.eval_quoted
...> |> elem(0)
true
iex> quote do
...> x = %Foo{value: 1, meta: 1}
...> y = 1
...> Comp.equal?(x, y) && Comp.equal?(y, x)
...> end
...> |> Code.eval_quoted
...> |> elem(0)
true

### Comp.eq/0 (macro)

### Comp.equal?/2 (function)

Is left term equal to right term?

### Examples - Comp.equal?/2 (function)

iex> Comp.equal?(1, 1)
true
iex> Comp.equal?(1, :hello)
false

### Comp.greater_or_equal?/2 (function)

Is left term greater or equal to right term?

### Examples - Comp.greater_or_equal?/2 (function)

iex> Comp.greater_or_equal?(1, 1)
true
iex> Comp.greater_or_equal?(1, 2)
false
iex> Comp.greater_or_equal?(2, 1)
true

### Comp.greater_than?/2 (function)

Is left term greater than right term?

### Examples - Comp.greater_than?/2 (function)

iex> Comp.greater_than?(1, 1)
false
iex> Comp.greater_than?(1, 2)
false
iex> Comp.greater_than?(2, 1)
true

### Comp.gt/0 (macro)

### Comp.left/0 (type)

### Comp.less_or_equal?/2 (function)

Is left term less or equal to right term?

### Examples - Comp.less_or_equal?/2 (function)

iex> Comp.less_or_equal?(1, 1)
true
iex> Comp.less_or_equal?(1, 2)
true
iex> Comp.less_or_equal?(2, 1)
false

### Comp.less_than?/2 (function)

Is left term less than right term?

### Examples - Comp.less_than?/2 (function)

iex> Comp.less_than?(1, 1)
false
iex> Comp.less_than?(1, 2)
true
iex> Comp.less_than?(2, 1)
false

### Comp.lt/0 (macro)

### Comp.max/2 (function)

Returns the biggest of the two given terms, if terms are equal - then the first one is returned

### Examples - Comp.max/2 (function)

iex> Comp.max(1, 1)
1
iex> Comp.max(1, 2)
2
iex> Comp.max(2, 1)
2

### Comp.min/2 (function)

Returns the smallest of the two given terms, if terms are equal - then the first one is returned

### Examples - Comp.min/2 (function)

iex> Comp.min(1, 1)
1
iex> Comp.min(1, 2)
1
iex> Comp.min(2, 1)
1

### Comp.not_equal?/2 (function)

Is left term not equal to right term?

### Examples - Comp.not_equal?/2 (function)

iex> Comp.not_equal?(1, 1)
false
iex> Comp.not_equal?(1, :hello)
true

### Comp.right/0 (type)

### Comp.type_of/1 (function)

### Comparable (protocol)

Protocol which describes ordering relation for pair of types

### Comparable.compare/1 (function)

Accepts struct with fields :left and :right and returns ord value

### Comparable.ord/0 (type)

### Comparable.t/0 (type)

### Comparable.Type.Any.To.Any (module)

### Comparable.Type.Ash.CiString.To.Ash.CiString (module)

### Comparable.Type.Ash.CiString.To.BitString (module)

### Comparable.Type.Atom.To.BitString (module)

### Comparable.Type.BitString.To.Ash.CiString (module)

### Comparable.Type.BitString.To.Atom (module)

### Comparable.Type.BitString.To.Decimal (module)

### Comparable.Type.Date.To.Date (module)

### Comparable.Type.DateTime.To.DateTime (module)

### Comparable.Type.Decimal.To.BitString (module)

### Comparable.Type.Decimal.To.Decimal (module)

### Comparable.Type.Decimal.To.Float (module)

### Comparable.Type.Decimal.To.Integer (module)

### Comparable.Type.Float.To.Decimal (module)

### Comparable.Type.Integer.To.Decimal (module)

### Comparable.Type.List.To.List (module)

### Comparable.Type.Map.To.Map (module)

### Comparable.Type.NaiveDateTime.To.NaiveDateTime (module)

### Comparable.Type.Time.To.Time (module)

### Comparable.Type.Tuple.To.Tuple (module)

### Mix.Tasks.Ash.Codegen.run/1 (function)

Runs all codegen tasks for any extension on any resource/domain in your application.

### Mix.Tasks.Ash.GenerateLivebook.run/1 (function)

Generates a Livebook for each Ash domain

### Mix.Tasks.Ash.GeneratePolicyCharts.run/1 (function)

Generates a Mermaid Flow Chart for a given resource's policies.

### Mix.Tasks.Ash.GenerateResourceDiagrams.run/1 (function)

Generates Mermaid Resource Diagrams for each Ash domain

### Mix.Tasks.Ash.Migrate.run/1 (function)

Runs all migration tasks for any extension on any resource/domain in your application.

### Mix.Tasks.Ash.Reset.run/1 (function)

Runs all tear down & setup tasks for any extension on any resource/domain in your application.

### Mix.Tasks.Ash.Rollback.run/1 (function)

Runs all rollback tasks for any extension on any resource/domain in your application.

### Mix.Tasks.Ash.Setup.run/1 (function)

Runs all setup tasks for any extension on any resource/domain in your application.

### Mix.Tasks.Ash.TearDown.run/1 (function)

Runs all tear_down tasks for any extension on any resource/domain in your application.

## Links

- [Online documentation](https://hexdocs.pm/ash)
