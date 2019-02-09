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
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :groups
- has_many :users

## usersテーブル
|column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: false|
|email|string|null: false, foreign_key: false|
|password|string|null: false, foreign_key: false|

### Association
- has_many :messages
- belongs_to :menber

## groupsテーブル
|column|Type|Options|
|------|----|-------|
|group-name|string|null: false, foreign_key: false|

### Association
- has_many :messages
- belongs_to :menber

