# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## membersテーブル
|column|Type|Options|
|------|----|-------|
|user_id|reference|null: false, foreign_key: true|
|group_id|reference|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル
|column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: false|
|email|string|null: false, foreign_key: false|
|password|string|null: false, foreign_key: false|

### Association
- has_many :messages
- has_many :groups, through: :members
- has_many :members

## groupsテーブル
|column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: false|

### Association
- has_many :messages
- has_many :users, through: :members
- has_many :members

## messagesテーブル
|column|Type|Options|
|------|----|-------|
|body|text|null: true, foreign_key: false|
|image|text|null: true, foreign_key: false|
|user_id|reference|null: false, foreign_key: true|
|group_id|reference|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
