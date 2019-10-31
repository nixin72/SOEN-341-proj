# Messages
## Get all messages for the channel
List all messages that the user can view in this specific channel
```
GET /messages
```
| Name | Type | Description |
|:-----|:-----|:------------|
| channel | query | the channel from which to get messages |

,## send a new message
Receives data pertaining to a new message and saves in the database
```
POST /messages
```
| Name | Type | Description |
|:-----|:-----|:------------|


## test if the client is up to date on messages
Receives a timestamp from the client for the last message they received. If the timestamp is up to date, return false. True otherwise.
```
GET /messages/latest
```
| Name | Type | Description |
|:-----|:-----|:------------|
| timestamp | query | The timestamp of the last message on the client |
| channel | query | The id of the channel to look in |

